import { Admin } from "src/admin/entities/admin.entity";
import { Column, Entity, OneToOne } from "typeorm";

@Entity()
export class User {

    @Column()
    id: number;

    @Column()
    name: string;
    
    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    age: number;

    @Column()
    phone: number;

    @OneToOne(()=> Admin)
    admin: Admin;
}
