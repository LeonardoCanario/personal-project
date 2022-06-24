import { User } from "src/users/entities/user.entity";
import { Column, OneToOne } from "typeorm";

export class Admin {

    @Column()
    id: number;
    
    @OneToOne(()=> User)
    user: User;
}
