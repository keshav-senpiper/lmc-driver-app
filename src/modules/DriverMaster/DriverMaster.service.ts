import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DRIVERMASTER } from '../../models/DriverMaster';

@Injectable()
export class DriverMasterService {
  constructor(
    @InjectModel(DRIVERMASTER)
    private driverMasterModel: typeof DRIVERMASTER,
  ) {}

  async getDriverByPhoneNumber(phoneNumber: string) : Promise<DRIVERMASTER> {
    const driver = await this.driverMasterModel.findOne({
      where: { contactNumber: phoneNumber },
    });
    if (!driver) {
      throw new NotFoundException(`Driver with phone number ${Number} not found`);
    }
    return driver;
  }

  async getEmergencyContacts(phoneNumber: string): Promise<{ emergencyContactName: string; emergencyContactNumber: string }> {
    const driver = await this.driverMasterModel.findOne({ where: { contactNumber: phoneNumber } });
    if (!driver) {
      throw new NotFoundException(`Driver with phone number ${phoneNumber} not found`);
    }
    return {
      emergencyContactName: driver.emergencyContactName,
      emergencyContactNumber: driver.emergencyContactNumber,
    };
  }
}
