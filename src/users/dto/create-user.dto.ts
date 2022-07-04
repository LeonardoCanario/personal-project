import { UserPermissionEnum } from './../interface/user.enum';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { MinLength } from 'class-validator';
import { IsEmail , IsString} from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty()
    @IsEmail()
    email: string;
 
    @IsNotEmpty()
    @IsString()
     name: string;
 
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
     password: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;

    @IsNotEmpty()
    @IsNumber()
    phone: number;

    permission: UserPermissionEnum;
}
