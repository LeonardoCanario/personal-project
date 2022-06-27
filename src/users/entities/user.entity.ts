import { UserPermissionEnum } from './../interface/user.enum';
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

    @Column({type: 'enum', enum: UserPermissionEnum, default: UserPermissionEnum.USER})
    permission: UserPermissionEnum
}
