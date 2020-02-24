import {MigrationInterface, QueryRunner} from "typeorm";

export class PopulateTasks1582031490139 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("INSERT INTO tasks (name, priority) " +
            "VALUES ('Task0001', 11 );" +
            "INSERT INTO tasks (name, priority) " +
            "VALUES ('Task0002', 22 );" +
            "INSERT INTO tasks (name, priority) " +
            "VALUES ('Task0003', 33 );");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("tasks");
    }
}
