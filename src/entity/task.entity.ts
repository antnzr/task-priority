import {BaseEntity, Check, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';


@Entity({name: 'tasks'})
@Check(`"priority" <= 100`)
class Task extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    public name?: string;

    @Column()
    public priority?: number;

}

export default Task;