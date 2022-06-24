import { IsNumber } from 'class-validator';
import { MinLength } from 'class-validator';
import { IsEmail , IsString} from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    email: string;
 
    @IsString()
     name: string;
 
    @IsString()
    @MinLength(8)
     password: string;

    @IsNumber()
    age: number;

    @IsNumber()
    phone: number;
}
