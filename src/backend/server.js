import express, { json, urlencoded } from "express";
import { connect } from "./util/database";
import { logger } from "./util/logger";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send({ message: 'Hello' });
});

const SERVER_API_PORT = process.env.SERVER_API_PORT || 3000;

export const start = async () => {
    await connect();
    app.listen(process.env.PORT || SERVER_API_PORT, () => {
        logger.info("Server started at 3000");
    });
}