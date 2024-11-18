import { Controller, Get, Query } from '@nestjs/common';
import { DriverMasterService } from './drivermaster.service';
import { DRIVERMASTER } from '../../models/DriverMaster';

@Controller('api/drivers')
export class DriverMasterController {
  constructor(private readonly driverMasterService: DriverMasterService) {}

  @Get('getUserData')
  async getDriverByPhoneNumber(@Query('phoneNumber') phoneNumber: string): Promise<DRIVERMASTER> {
    return this.driverMasterService.getDriverByPhoneNumber(phoneNumber);
  }

  @Get('emergencyContacts')
  async getEmergencyContacts(@Query('phoneNumber') phoneNumber: string): Promise<{emergencyContactName: string; emergencyContactNumber: string}>{
    return this.driverMasterService.getEmergencyContacts(phoneNumber);
  }
}