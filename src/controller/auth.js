import { userController } from './user';
import { roleController } from './role';
import _ from 'lodash';
import { OAuth2Client } from 'google-auth-library';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import gravatar from 'gravatar';

import SibApiV3Sdk from 'sib-api-v3-sdk';

import { errorHandler } from '../util/dbErrorHandling';

// Default Mail Client to Send Mail
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SIB_API_KEY;

// Register Controller
export const registerController = (req, res) => {
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    let emailData = new SibApiV3Sdk.SendSmtpEmail();
    const { name, email } = req.body;
    const password = bcrypt.hashSync(req.body.password, 10);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const firstError = errors.array().map(error => error.msg)[0];
        return res.status(422).json({
            errors: firstError,
        })
    } else {
        userController.userExist(email).then(data => {
            if (data != null) {
                return res.status(400).json({
                    error: "Email is taken",
                })
            }
        })

        const token = jwt.sign({
            name,
            email,
            password
        }, process.env.JWT_ACCOUNT_ACTIVATION, {
            expiresIn: '30m'
        });

        // Email Sending
        emailData.subject = `Activation Mail for verification`;
        emailData.sender = { "name": `${process.env.CLIENT_NAME}`, "email": `${process.env.SENDER_MAIL}` };
        emailData.to = [{ "name": name, "email": email }];
        emailData.htmlContent = `
            <h1>Please Click on this link to activate</h1>
            <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
            <hr/>
            <p>This email contain sensitive info</p>
            <p>${process.env.CLIENT_URL}</p>
        `

        apiInstance.sendTransacEmail(emailData).then(sent => {
            return res.json({
                msg: `Email has been sent to ${email}`,
            });
        }).catch(err => {
            return res.status(400).json({
                error: errorHandler(err)
            });
        });
    }
}

// Activation Controller
export const activationController = async (req, res) => {
    const { token } = req.body;

    if (token) {
        jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION,
            (err) => {
                if (err) {
                    return res.status(401).json({
                        error: "Expired Token. Signup Again"
                    });
                } else {
                    const { name, email, password } = jwt.decode(token);

                    (async () => {
                        const role = await roleController.getRole({ role: "CUSTOMER" });
                        const avatar = gravatar.url(email, {
                            s: '200',
                            r: 'pg',
                            d: 'mm'
                        });
                        const userBody = {
                            name,
                            email,
                            password,
                            role,
                            avatar
                        }
                        userController.createUser(userBody).then(user => {
                            return res.status(200).json({
                                msg: "SignUp successful",
                                data: user,
                            });
                        });
                    })();
                }
            })
    } else {
        return res.json({
            error: "Error occured",
        });
    }
};

// Login Controller
export const loginController = async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors,
        });
    }

    (async () => {
        const user = await userController.userExist(email);
        if (!user) return res.status(400).json({ error: "Invalid Credentials" });
        const validPass = await bcrypt.compareSync(password, user.password);
        if (!validPass) return res.status(400).json({ error: "Invalid Credentials" });

        // Generate Token for 7 days
        const token = jwt.sign({
            name: user.name,
            id: user._id,
        }, process.env.JWT_SECRET, {
            expiresIn: '7d',
        });

        return res.json({
            token,
            user
        });
    })();
}

// Forget Controller
export const forgetController = async (req, res) => {
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    let emailData = new SibApiV3Sdk.SendSmtpEmail();
    const { email } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors,
        });
    }

    const user = await userController.userExist(email);
    if (!user) {
        return res.status(400).json({
            error: 'User does not exist with this email.'
        });
    }

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_RESET_PASSWORD, {
        expiresIn: '10m'
    });

    // Email Sending
    emailData.subject = `Password Reset Link`;
    emailData.sender = { "name": `${process.env.CLIENT_NAME}`, "email": `${process.env.SENDER_MAIL}` };
    emailData.to = [{ "name": user.name, "email": email }];
    emailData.htmlContent = `
        <h1>Please Click on this link to reset your password</h1>
        <p>${process.env.CLIENT_URL}/users/password/reset/${token}</p>
        <hr/>
        <p>This email contain sensitive info</p>
        <p>${process.env.CLIENT_URL}</p>
    `

    // Update the user password reset link
    const data = await user.updateOne({
        resetPasswordLink: token
    });

    if (!data) {
        return res.status(400).json({
            error: "Database connection error on user password forget request"
        })
    }
    apiInstance.sendTransacEmail(emailData).then(sent => {
        return res.json({
            msg: `Email has been sent to ${email}`,
        });
    }).catch(err => {
        return res.status(400).json({
            error: errorHandler(err)
        });
    });
}

// Reset Controller
export const resetPasswordController = async (req, res) => {
    const { resetPasswordLink, newPassword } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors,
        });
    }
    if (resetPasswordLink) {
        jwt.verify(resetPasswordLink, process.env.JWT_RESET_PASSWORD,
            (err, decoded) => {
                if (err) {
                    return res.status(401).json({
                        error: "Expired Token. Signup Again"
                    });
                } else {
                    const { id } = jwt.decode(resetPasswordLink);
                    const updation = {
                        password: bcrypt.hashSync(newPassword, 10),
                        resetPasswordLink: ''
                    }
                    const user = userController.updateOne(id, updation);
                    if (!user) {
                        return res.status(400).json({
                            error: 'Error resetting user password'
                        });
                    }
                    res.json({
                        message: `Great! Now you can login with your new password`
                    });
                }
            });
    }
}

// Google Controller
const client = new OAuth2Client(process.env.GOOGLE_CLIENT);
export const googleController = async (req, res) => {
    const { idToken } = req.body;
    const response = await client.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_SECRET,
    });

    if (!response) {
        return res.status(422).json({
            error: "Google Authentication Error",
        });
    }

    const { email_verified, name, email } = response.payload;
    if (email_verified) {
        const user = await userController.userExist(email);
        if (user) {
            const token = jwt.sign({
                id: user._id
            }, process.env.JWT_SECRET, {
                expiresIn: '7d',
            });

            return res.json({
                token,
                user,
            });
        } else {
            const avatar = gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });
            const role = await roleController.getRole({ role: "CUSTOMER" });
            let password = email + process.env.JWT_SECRET;
            password = bcrypt.hashSync(password, 10);
            userBody = {
                name,
                email,
                password,
                role,
                avatar
            }
            const user = await userController.createUser(userBody);
            if (!user) {
                return res.status(400).json({
                    error: "User signup failed with google"
                });
            }
            const token = jwt.sign({
                id: user._id,
            }, process.env.JWT_SECRET, {
                expiresIn: '7d'
            });

            return res.json({
                token,
                user,
            });
        }
    } else {
        return res.status(400).json({
            error: "Google login failed. Try Again."
        });
    }
}