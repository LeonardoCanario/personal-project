import { UsersModule } from './../users/users.module';
import { forwardRef, Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';

@Module({
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService],
  imports: [forwardRef(()=>UsersModule)]
})
export class AdminModule {}
