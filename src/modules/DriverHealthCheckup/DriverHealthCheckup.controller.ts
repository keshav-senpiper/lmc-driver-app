import { Controller, Get, Query } from '@nestjs/common';
import { DriverHealthCheckupService } from './driverhealthcheckup.service';
import { driverhealthcheckup } from '../../models/DriverHealthCheckup';

@Controller('api/driver-health-checkup')
export class DriverHealthCheckupController {
  constructor(private readonly driverHealthCheckupService: DriverHealthCheckupService) {}

  @Get('by-phone')
  async getDriverHealthCheckupByPhoneNumber(@Query('phoneNumber') phoneNumber: string): Promise<driverhealthcheckup[]> {
    return this.driverHealthCheckupService.getDriverHealthCheckupByPhoneNumber(phoneNumber);
  }
}