import { Column, Model, Table, ForeignKey, DataType } from 'sequelize-typescript';
import { Prescription } from './Prescription';

@Table({
  tableName: 'PrescriptionMedicines',
  timestamps: true,
})
export class PrescriptionMedicine extends Model {
  @ForeignKey(() => Prescription)
  @Column
  prescription_id: string;

  @Column
  medicine_name: string;

  @Column
  dosage: string;

  @Column
  duration_per_day: number;

  @Column
  pills_per_time: number;

  @Column
  course_duration_days: number;

  @Column({
    type: DataType.TEXT,
  })
  instructions: string;
}