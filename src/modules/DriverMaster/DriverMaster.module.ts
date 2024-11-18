import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DRIVERMASTER } from '../../models/DriverMaster';
import { DriverMasterController } from './drivermaster.controller';
import { DriverMasterService } from './drivermaster.service';

@Module({
  imports: [
    SequelizeModule.forFeature([DRIVERMASTER]), // Register DriverMaster model
  ],
  controllers: [DriverMasterController], // Register DriverMaster controller
  providers: [DriverMasterService], // Register DriverMaster service
  exports:[DriverMasterService]
})
export class DriverMasterModule {}
