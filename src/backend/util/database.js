import mongoose from "mongoose";
import { db_config } from "../config/db_config";
import { logger } from "./logger";

const MONGO_URI = process.env.MONGO_URI || db_config.uri;
// console.log(process.env);

export const connect = (url = MONGO_URI, opts = {}) => {
    logger.info("Database Connected");
    return mongoose.connect(url, {
        ...opts,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}