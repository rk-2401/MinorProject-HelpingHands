import { Role } from "../Models/Roles";

const createRole = async (roleType) => {
    try {
        const data = await Role.create({ role: roleType });
        return data;
    } catch (err) {
        console.log(err);
    }
}

const getRole = async (req) => {
    try {
        return Role.findOne(req);
    } catch (err) {
        console.log(err);
    }
}


export const roleController = {
    createRole,
    getRole,
}

export const createRoleController = async (req, res) => {
    roleController.createRole("CUSTOMER");
    roleController.createRole("ADMIN");
    roleController.createRole("EMPLOYEE");

    res.json({
        msg: "Created",
    });
}