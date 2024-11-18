import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { driverhealthcheckup } from '../../models/DriverHealthCheckup';
import { DRIVERMASTER } from '../../models/DriverMaster';

@Injectable()
export class DriverHealthCheckupService {
  constructor(
    @InjectModel(driverhealthcheckup)
    private driverHealthCheckupModel: typeof driverhealthcheckup,
    @InjectModel(DRIVERMASTER)
    private driverMasterModel: typeof DRIVERMASTER,
  ) {}

  async getDriverHealthCheckupByPhoneNumber(phoneNumber: string): Promise<driverhealthcheckup[]> {
    // Find the driver by phone number
    const driver = await this.driverMasterModel.findOne({ where: { contactNumber: phoneNumber } });
    if (!driver) {
      throw new NotFoundException(`Driver with phone number ${phoneNumber} not found`);
    }

    // Find the health checkups associated with the driver
    const healthCheckups = await this.driverHealthCheckupModel.findAll({ where: { driver_id: driver.id } });
    if (healthCheckups.length === 0) {
      throw new NotFoundException(`No health checkup records found for driver with phone number ${phoneNumber}`);
    }

    return healthCheckups;
  }
}