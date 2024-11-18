import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { driverhealthcheckup } from '../../models/DriverHealthCheckup';
import { DRIVERMASTER} from '../../models/DriverMaster';
import { DriverHealthCheckupController } from './driverhealthcheckup.controller';
import { DriverHealthCheckupService } from './driverhealthcheckup.service';

@Module({
  imports: [
    SequelizeModule.forFeature([driverhealthcheckup, DRIVERMASTER]), // Register DriverHealthCheckup and DriverMaster models
  ],
  controllers: [DriverHealthCheckupController], // Register DriverHealthCheckup controller
  providers: [DriverHealthCheckupService], // Register DriverHealthCheckup service
})
export class DriverHealthCheckupModule {}
