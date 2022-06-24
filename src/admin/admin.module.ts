import { UserService } from './../../../personal-project_front-end/src/app/user/user.service';
import { UsersModule } from './../users/users.module';
import { forwardRef, Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';

@Module({
  controllers: [AdminController],
  providers: [AdminService, UserService],
  exports: [AdminService],
  imports: [forwardRef(()=>UsersModule)]
})
export class AdminModule {}
