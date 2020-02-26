import {BaseEntity, Check, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';


@Entity({name: 'tasks'})
class Task extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({
        type: 'varchar',
        nullable:false,
        length: 255
    })
    public name?: string;

    @Column({
        type: "int",
        nullable:true,
        default: 0
    })
    @Check(`"priority" <= 100`)
    public priority?: number;

}

export default Task;