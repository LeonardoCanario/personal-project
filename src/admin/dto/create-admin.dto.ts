import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateAdminDto {

    @IsNumber()
    @IsNotEmpty()
    userId: number;

}
