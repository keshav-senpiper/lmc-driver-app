import { Column, Model, Table, DataType, HasMany, PrimaryKey, ForeignKey, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { PrescriptionMedicine } from './PrescriptionMedicine';

@Table({
  tableName: 'Prescriptions',
  timestamps: true,
})
export class Prescription extends Model {

  @PrimaryKey  
  @Column({
    type:DataType.STRING,
    allowNull:false
  })
  prescription_id: string;

  @Column({
    allowNull: false,
  })
  doctor_name: string;

  @Column
  doctor_qualification: string;

  @Column({
    type: DataType.STRING(50),
  })
  doctor_registration_number: string;

  @Column({
    allowNull: false,
  })
  patient_id: string;

  @Column({
    allowNull: false,
  })
  patient_name: string;

  @Column({
    type: DataType.DATE,
  })
  consultation_date: Date;

  @Column({
    type: DataType.JSONB,
  })
  vitals: object;

  @Column
  chief_complaint: string;

  @Column({
    type: DataType.TEXT,
  })
  labs: string;

  @Column
  next_followup_days: string;

  @Column({
    type: DataType.TEXT,
  })
  preventive_advice: string;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;


  @HasMany(() => PrescriptionMedicine, { foreignKey: 'prescription_id' })
  medicines: PrescriptionMedicine[];
}