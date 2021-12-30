import { check } from "express-validator";

export const validRegister = [
    check('name', 'name is required').notEmpty()
        .isLength({
            min: 3,
            max: 64
        }).withMessage('name must be between 3 to 64 characters'),

    check('email').isEmail()
        .withMessage('Must be a valid Email Address'),

    check('password', 'password is required').notEmpty()
        .isLength({
            min: 8
        }).withMessage('Password must contain atleast 8 characters')
        .matches(/\d/).withMessage('Password must contain a number')
]

export const validLogin = [
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('password', 'password is required').notEmpty(),
    check('password').isLength({
        min: 6
    }).withMessage('Password must contain at least 6 characters').matches(/\d/).withMessage('password must contain a number')
]

export const forgotPasswordValidator = [
    check('email')
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Must be a valid email address')
]

export const resetPasswordValidator = [
    check('newPassword')
        .not()
        .isEmpty()
        .isLength({ min: 6 })
        .withMessage('Password must be at least  6 characters long')
]