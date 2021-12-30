import { start } from "./src/backend/server";
const path = require('path')
require('dotenv').config({
    path: path.resolve(__dirname, '.env'),
});
import { User } from './src/backend/Models/user/user-model';

start();
