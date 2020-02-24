import express from "express";
import cors from "cors"
import helmet from "helmet";
import * as bodyParser from  "body-parser";

import {TaskRoute} from "./route/tasks.router";


class App {

    public app: express.Application;
    public taskRoute: TaskRoute;

    constructor() {
        this.app = express();

        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.taskRoute = new TaskRoute();
        this.taskRoute.routes(this.app);
    }
}

export default new App().app;