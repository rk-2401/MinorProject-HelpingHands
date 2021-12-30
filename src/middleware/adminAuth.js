import { userController } from "../controller/user";
import { roleController } from "../controller/role";
import { logger } from "./logger";


export const adminAuth = async (req, res, next) => {
    try {
        const user = await userController.getUser({
            _id: req.user.id
        });

        const role = await roleController.getRole({
            _id: user.role
        });

        if (role.role != "ADMIN") {
            return res.status(403).json({
                error: "Admin resource access denied"
            });
        }
        next();

    } catch (err) {
        logger.error(err);
        res.status(500).send("Server Error");
    }
}