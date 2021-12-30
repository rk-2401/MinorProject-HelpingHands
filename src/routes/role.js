import { Router } from "express";
import { createRoleController } from "../controller/role";


const router = Router();

router.post('/create-roles', createRoleController);

export const roleRouter = router;