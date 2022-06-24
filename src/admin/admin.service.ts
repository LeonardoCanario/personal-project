import { UsersService } from './../users/users.service';
import { Admin } from 'src/admin/entities/admin.entity';
import { Injectable, NotFoundException, forwardRef, Inject } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminService {

    private admins: Admin[] = [];

    constructor( @Inject(forwardRef(()=> UsersService)) private readonly userService: UsersService){}

  create(createAdminDto: CreateAdminDto) {

    const currentMaxId = this.admins[this.admins.length -1]?.id || 0;
    const id = currentMaxId + 1;

    const user = this.userService.findOne(createAdminDto.userId);

    const admin = {
      id,
      name: user.name,
      email: user.email,
      password: user.password,
      user: user,
      
    };

    this.admins.push(admin);
    return admin;
  }

  findAll() {
    
    return this.admins;
  }

  findOne(id: number) {
    const index = this.admins.findIndex(admin => admin.id == id);
    return this.admins[index];
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    const admin = this.findOne(id);
    const newAdmin = {
      ...admin,
      ...updateAdminDto,
    }
    const index = this.admins.findIndex(admin => admin.id == id);
    this.admins[index] = newAdmin;
    return newAdmin;
  }

  remove(id: number) {

    const index = this.admins.findIndex(admin => admin.id == id);

    if( index === -1){
      throw new NotFoundException(`User with this id ${id} no found`)
    }
  
    this.admins.slice(index, 1);

    return `This action removes a #${id} admin`;
  }
}
