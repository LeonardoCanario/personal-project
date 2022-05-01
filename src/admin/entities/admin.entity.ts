import { User } from "src/users/entities/user.entity";
import { Column, OneToOne } from "typeorm";

export class Admin {

    @Column()
    id: number;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    password: string;

    @OneToOne(()=> User)
    user: User;
}
