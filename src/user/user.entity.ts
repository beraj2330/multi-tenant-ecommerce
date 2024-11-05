import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

//It represents a table in the database and defines the structure 
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true})
    email: string;

    @Column()
    password: string;

    @Column({ default: 'customer' })
    role: string; //customer, vendor, admin
}