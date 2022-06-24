import { AdminService } from './../admin/admin.service';
import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  private users: User[] = [];

  constructor(){}
  
  create(createUserDto: CreateUserDto) {

    const currentMaxId = this.users[this.users.length -1]?.id || 0;
    const id = currentMaxId + 1;

    createUserDto.email
    const user = {
      id,
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password,
      age: createUserDto.age,
      phone: createUserDto.phone,    
    };
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const index = this.users.findIndex(user => user.id == id);
    return this.users[index];
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    
    const user = this.findOne(id);
    const newUser = {
      ...user,
      ...updateUserDto,
    }
    const index = this.users.findIndex(user => user.id == id);
    this.users[index] = newUser;
    return newUser;
  }

  remove(id: number) {

    const index = this.users.findIndex(user => user.id == id);

    if(index === -1){
      throw new NotFoundException(`User with this id ${id} not found`);
    }

    this.users.splice(index, 1);

    return `This action removes a #${id} user`;
  }
}
