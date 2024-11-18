import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DriverMasterModule } from './modules/drivermaster/drivermaster.module';
import { OtpModule } from './modules/otp/otp.module';
import { DriverHealthCheckupModule } from './modules/driverhealthcheckup/driverhealthcheckup.module';
import { DRIVERMASTER } from './models/DriverMaster';
import { driverhealthcheckup } from './models/DriverHealthCheckup';
import { Otp } from './models/OTP';
import { Center } from './models/Center';
import { CETMANAGEMENT } from './models/CetManagement';
import { Doctor } from './models/Doctor';
import { User } from './models/User';
import { DRIVERFAMILYHISTORY } from './models/DriverFamilyHistory';
import { Permission} from './models/Permissions';
import { Permissionmetadata } from './models/PermissionsMetaData';
import { Role } from './models/Role';
import { DRIVERMASTERPERSONAL } from './models/DriverMasterPersonal';
import { Centeruser } from './models/CenterUser';
import { Cetuser } from './models/CetUser';
import { Consultation } from './models/Consultation';
import { ConsultationModule } from './modules/Consultation/Consultation.module';
import { Prescription } from './models/Prescription';
import { PrescriptionMedicine } from './models/PrescriptionMedicine';
import { PrescriptionModule } from './modules/Prescription/Prescription.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [
        DRIVERMASTER,
        driverhealthcheckup,
        Otp,
        Center,
        CETMANAGEMENT,
        Doctor,
        User,
        DRIVERFAMILYHISTORY,
        Permission,
        Permissionmetadata,
        Role,
        DRIVERMASTERPERSONAL,
        Centeruser,
        Cetuser, 
        Consultation,
        Prescription,
        Consultation,
        PrescriptionMedicine
      ],
      autoLoadModels: true,
      synchronize: false, // Consider disabling in production
    }),
    DriverMasterModule,
    OtpModule,
    DriverHealthCheckupModule,
    ConsultationModule,
    // PrescriptionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
