import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Prescription } from '../../models/Prescription';
import { PrescriptionMedicine } from '../../models/PrescriptionMedicine';
import { PrescriptionService } from './Prescription.service';
import { PrescriptionController } from './Prescription.controller';

@Module({
  imports: [SequelizeModule.forFeature([Prescription,PrescriptionMedicine])],
  controllers: [PrescriptionController],
  providers: [PrescriptionService],
  exports: [PrescriptionService],
})
export class PrescriptionModule {}