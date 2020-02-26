import app from "./app";
import dotenv from "dotenv";
import http from "http";
import "reflect-metadata";


dotenv.config();
const PORT = process.env.SERVER_PORT || 7000;

app.set('port', PORT);

http
    .createServer(app)
    .listen(PORT, () =>
        console.log(`Server is running...`));