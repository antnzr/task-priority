import {Application, Request, Response} from "express";
import {TaskController} from "../controller/task.controller";


class TaskRoute {
    private controller: TaskController;

    constructor() {
        this.controller = new TaskController();
    }

    public routes(app: Application): void {
        app.route('/')
            .get((request: Request, response: Response) => {
                response.status(200)
                    .send({
                        message: "GET request successfully."
                    });
            });

        app.route('/api/v1/tasks')
            .get(this.controller.getAll)
            .post(this.controller.create);

        app.route("/api/v1/tasks/h-priority")
            .get(this.controller.getWithHighPriority);

        app.route('/api/v1/tasks/:id')
            .put(this.controller.update)
            .delete(this.controller.delete);
    }
}

export {TaskRoute};