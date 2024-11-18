import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { Prescription } from '../../models/Prescription';

@Controller('api/prescriptions')
export class PrescriptionController {
  constructor(private readonly prescriptionService: PrescriptionService) {}

  @Post('create')
  async createPrescription(@Body() data: Partial<Prescription>): Promise<Prescription> {
    return this.prescriptionService.createPrescription(data);
  }

  @Get(':id')
  async getPrescriptionById(@Param('id') prescription_id: string): Promise<Prescription> {
    return this.prescriptionService.getPrescriptionById(prescription_id);
  }

  @Get()
  async getAllPrescriptions(): Promise<Prescription[]> {
    return this.prescriptionService.getAllPrescriptions();
  }

  @Put(':id')
  async updatePrescription(@Param('id') prescription_id: string, @Body() data: Partial<Prescription>): Promise<Prescription> {
    return this.prescriptionService.updatePrescription(prescription_id, data);
  }

  @Delete(':id')
  async deletePrescription(@Param('id') prescription_id: string): Promise<void> {
    return this.prescriptionService.deletePrescription(prescription_id);
  }
}
