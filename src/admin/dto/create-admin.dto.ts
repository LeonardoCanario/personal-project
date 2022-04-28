import { IsEmail, IsString, MinLength } from "class-validator";
import { User } from "src/users/entities/user.entity";

export class CreateAdminDto {

    @IsEmail()
    email: string;
 
    @IsString()
     name: string;
 
    @IsString()
    @MinLength(8)
     password: string;

}
