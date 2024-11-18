// otp.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Otp } from '../../models/OTP';
// import { User } from '../models/User';
const { sendOTP } = require('../../helper/sendOtp');

@Injectable()
export class OtpService {
  constructor(
    @InjectModel(Otp)
    private otpModel: typeof Otp,
  ) {}

  async generateOtp(phoneNumber: string) {
    const otpData = await sendOTP(phoneNumber);
    await this.otpModel.create({
      phone: phoneNumber,
      otp: otpData.otp,
    });
    return { message: 'OTP sent successfully', otp: otpData.otp };
  }

  async verifyOtp(phoneNumber: string, otp: string) {
    const otpEntry = await this.otpModel.findOne({ where: { phone: phoneNumber, otp } });
    if (otpEntry) {
      // Optionally, delete OTP entry after verification
      await otpEntry.destroy();
      return { message: 'OTP verified successfully' };
    } else {
      throw new Error('Invalid OTP');
    }
  }
}
