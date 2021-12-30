import { User } from '../Models/User';

const userExist = async (email) => {
    return User.findOne({ email: email });
}

const getUser = async (req) => {
    return User.findOne(req);
}

const createUser = async (userBody) => {
    try {
        const doc = await User.create(userBody);
        return doc;
    } catch (err) {
        console.log(err);
    }
}

const updateOne = async (id, updatedBody) => {
    try {
        return User.findOneAndUpdate({ _id: id }, updatedBody, { new: true }).exec();
    } catch (e) {
        console.error(e);
    }
}

export const userController = {
    getUser,
    userExist,
    createUser,
    updateOne,
}