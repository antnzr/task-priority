import app from "../src/app";
import alasql from "alasql";

const data = [
    {id: 1, name: "task01", priority: 11},
    {id: 2, name: "task02", priority: 22},
    {id: 3, name: "task03", priority: 33},
];

test("app", () => {
    alasql(`CREATE TABLE tasks (id INT, name VARCHAR, priority INT)`);
    alasql(`INSERT INTO tasks VALUES (1, 'task01', 11), (2, 'task02', 22), (3, 'task03', 33)`);
    const tasks = alasql(`SELECT * FROM tasks`);

    expect(tasks).toStrictEqual(data)
});
