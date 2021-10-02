import { start } from "./src/backend/server";
const path = require('path')
require('dotenv').config({
    path: path.resolve(__dirname, '.env'),
});
import { User } from './src/backend/Models/user/user-model';

start();

async function test() {
    const user = new User({
        email: 'sajid.anis20@gmail.com',
        password: 'Sajid',
        userType: 'admin',
    });
    await user.save();
    console.log(user);
}