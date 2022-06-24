import { AdminModule } from './../admin/admin.module';
import { AdminService } from './../admin/admin.service';
import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
  imports: []
})
export class UsersModule {}
