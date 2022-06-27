import { UsersModule } from './../users/users.module';
import { forwardRef, Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [AdminController],
<<<<<<< HEAD
  providers: [AdminService, UsersService],
=======
  providers: [AdminService],
>>>>>>> 541619dd53aff5ef45978393e8ca53bb863f9dae
  exports: [AdminService],
  imports: [forwardRef(()=>UsersModule)]
})
export class AdminModule {}
