import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Consultation } from '../../models/Consultation';

@Injectable()
export class ConsultationService {
  constructor(
    @InjectModel(Consultation)
    private consultationModel: typeof Consultation,
  ) {}

  async createConsultation(data: Partial<Consultation>): Promise<Consultation> {
    return await this.consultationModel.create(data);
  }

  async getConsultationById(consultation_id: string): Promise<Consultation> {
    const consultation = await this.consultationModel.findOne({ where: { consultation_id } });
    if (!consultation) {
      throw new NotFoundException(`Consultation with ID ${consultation_id} not found`);
    }
    return consultation;
  }

  async getAllConsultations(): Promise<Consultation[]> {
    return await this.consultationModel.findAll();
  }
}