import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ConsultationService } from './Consultation.service';
import { Consultation } from '../../models/Consultation';

@Controller('api/consultations')
export class ConsultationController {
  constructor(private readonly consultationService: ConsultationService) {}

  @Post('create')
  async createConsultation(@Body() data: Partial<Consultation>): Promise<Consultation> {
    return this.consultationService.createConsultation(data);
  }

  @Get(':id')
  async getConsultationById(@Param('id') consultation_id: string): Promise<Consultation> {
    return this.consultationService.getConsultationById(consultation_id);
  }

  @Get()
  async getAllConsultations(): Promise<Consultation[]> {
    return this.consultationService.getAllConsultations();
  }
}
