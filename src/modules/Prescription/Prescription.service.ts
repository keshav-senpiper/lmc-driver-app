import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Prescription } from '../../models/Prescription';
import { PrescriptionMedicine } from '../../models/PrescriptionMedicine';

@Injectable()
export class PrescriptionService {
  constructor(
    @InjectModel(Prescription)
    private prescriptionModel: typeof Prescription,
    @InjectModel(PrescriptionMedicine)
    private prescriptionMedicineModel: typeof PrescriptionMedicine,
  ) {}

  async createPrescription(data: Partial<Prescription>): Promise<Prescription> {
    const prescription = await this.prescriptionModel.create(data);
    if (data.medicines) {
      for (const medicine of data.medicines) {
        await this.prescriptionMedicineModel.create({
          ...medicine,
          prescription_id: prescription.prescription_id,
        });
      }
    }
    return prescription;
  }

  async getPrescriptionById(prescription_id: string): Promise<Prescription> {
    const prescription = await this.prescriptionModel.findOne({
      where: { prescription_id },
      include: [PrescriptionMedicine],
    });
    if (!prescription) {
      throw new NotFoundException(`Prescription with ID ${prescription_id} not found`);
    }
    return prescription;
  }

  async getAllPrescriptions(): Promise<Prescription[]> {
    return await this.prescriptionModel.findAll({ include: [PrescriptionMedicine] });
  }

  async updatePrescription(prescription_id: string, data: Partial<Prescription>): Promise<Prescription> {
    const prescription = await this.getPrescriptionById(prescription_id);
    if (data.medicines) {
      await this.prescriptionMedicineModel.destroy({ where: { prescription_id } });
      for (const medicine of data.medicines) {
        await this.prescriptionMedicineModel.create({
          ...medicine,
          prescription_id: prescription.prescription_id,
        });
      }
    }
    return await prescription.update(data);
  }

  async deletePrescription(prescription_id: string): Promise<void> {
    const prescription = await this.getPrescriptionById(prescription_id);
    await this.prescriptionMedicineModel.destroy({ where: { prescription_id } });
    await prescription.destroy();
  }
}