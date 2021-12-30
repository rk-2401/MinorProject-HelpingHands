import express, { json, urlencoded } from "express";
import { connect } from "./util/database";
import { logger } from "./util/logger";
import cors from 'cors';
import morgan from 'morgan';
import { authRouter } from "./routes/auth";
import { roleRouter } from "./routes/role";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

if (process.env.NODE_ENV == 'dev') {
    app.use(cors({
        origin: process.env.CLIENT_URL
    }));

    app.use(morgan('dev'));
}

// Routes
app.use('/api/v1/user', authRouter);
app.use('/api/v1/role', roleRouter);

app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Page Not Found"
    })
});

const SERVER_API_PORT = process.env.SERVER_API_PORT;

export const start = async () => {
    await connect();
    app.listen(SERVER_API_PORT, () => {
        logger.info(`Server started at ${SERVER_API_PORT}`);
    });
}