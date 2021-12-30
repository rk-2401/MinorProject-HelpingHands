import { Router } from "express";
import { route } from "express/lib/router";

import {
    registerController,
    activationController,
    loginController,
    forgetController,
    resetPasswordController,
    googleController,
} from '../controller/auth';

import {
    validRegister,
    validLogin,
    forgotPasswordValidator,
    resetPasswordValidator,
} from "../middleware/validation";

const router = Router();

router.post("/register", validRegister, registerController);
router.post('/login', validLogin, loginController);
router.post('/activation', activationController);
router.post('/password/forget', forgotPasswordValidator, forgetController);
router.post('/password/reset', resetPasswordValidator, resetPasswordController);

// Social Sites Login Routes
router.post('/googlelogin', googleController);

export const authRouter = router;