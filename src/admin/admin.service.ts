import { Admin } from 'src/admin/entities/admin.entity';
import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminService {

    private admins: Admin[] = [];

  create(createAdminDto: CreateAdminDto) {

    const currentMaxId = this.admins[this.admins.length -1]?.id || 0;
    const id = currentMaxId + 1;

    const admin = {
      id,
      ...createAdminDto,
      
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
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
