import { ConnectionOptions } from 'typeorm';
import dotenv from "dotenv";


dotenv.config();

const config: ConnectionOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [
        "dist/entity/**/*"
    ],
    migrations: [
        "dist/migrations/**/*"
    ],
    cli: {
        migrationsDir: 'dist/migrations',
    },
    migrationsRun: true,
    synchronize: true,
    logging: false,
};

export default config;