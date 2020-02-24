import {Request, Response} from 'express';
import {connection} from "../config/db.connection";
import Task from "../entity/task.entity";
import {validate} from "../middleware/json.validation";


class TaskController {

    public getAll(req: Request, res: Response) {
        connection
            .then(async connection => {
                const tasks = await connection.manager.find(Task);

                res.status(200).json(tasks);
            })
            .catch(error => {
                console.error("Error ", error);
                res.status(404).json(error);
            });
    }

    public create(req: Request, res: Response) {
        connection
            .then(async connection => {
                const requestTask = req.body;

                if (!validate(requestTask)) {
                    return res.status(404)
                        .json({message: `The request body isn't valid: ${JSON.stringify(requestTask)}`});
                }

                const task = new Task();
                task.name = requestTask.name;
                task.priority = requestTask.priority;

                await connection.manager.save(task);
                res.status(201).json({message: "Successfully Saved."})
            })
            .catch(error => {
                console.error("Error ", error);
                res.status(404).json(error);
            });
    }

    public update(req: Request, res: Response) {
        connection
            .then(async connection => {
                // @ts-ignore
                const task = await connection.manager.findOne(Task, req.params.id);

                if (!task) {
                    return res.json({message: `Task with id: ${req.params.id} not found`});
                }

                const requestTask = req.body;

                if (!validate(requestTask)) {
                    return res.status(404)
                        .json({message: `The request body isn't valid: ${JSON.stringify(requestTask)}`});
                }

                task.name = requestTask.name;
                task.priority = requestTask.priority;

                await connection.manager.save(task);

                res.status(200).json({message: "Successfully Updated."})
            })
            .catch(error => {
                console.error("Error ", error);
                res.status(500).json(error);
            });
    }

    public getWithHighPriority(req: Request, res: Response) {
        connection
            .then(async connection => {
                const task = await connection.manager
                    .query(`SELECT *
                            FROM tasks
                            WHERE priority = (SELECT MAX(priority) from tasks)`);

                res.status(200).json(task);
            })
            .catch(error => {
                console.error("Error ", error);
                res.status(404).json(error);
            });
    }

    public delete(req: Request, res: Response) {
        connection
            .then(async connection => {
                // @ts-ignore
                await connection.manager.remove(Task, {id: req.params.id});

                res.json({message: "Successfully Removed."})
            })
            .catch(error => {
                console.error("Error ", error);
                res.status(500).json(error);
            });
    }
}

export {TaskController};