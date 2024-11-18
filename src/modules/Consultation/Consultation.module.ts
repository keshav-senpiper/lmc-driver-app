// consultation.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Consultation } from '../../models/Consultation';
import { ConsultationService } from './Consultation.service';
import { ConsultationController } from './Consultation.controller';

@Module({
  imports: [SequelizeModule.forFeature([Consultation])],
  controllers: [ConsultationController],
  providers: [ConsultationService],
  exports: [ConsultationService],
})
export class ConsultationModule {}