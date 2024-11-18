import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Otp } from '../../models/OTP';
import { OtpController } from './otp.controller';
import { OtpService } from './otp.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Otp]), // Register OTP model
  ],
  controllers: [OtpController], // Register Otp controller
  providers: [OtpService], // Register Otp service
})
export class OtpModule {}
