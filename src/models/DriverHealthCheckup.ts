import { Column, Model, Table, BelongsTo, DataType } from 'sequelize-typescript';
import { DRIVERMASTER } from './DriverMaster';  // Assuming you have a DRIVERMASTER model
import { Doctor } from './Doctor';  // Assuming you have a Doctor model
import { CETMANAGEMENT } from './CetManagement';  // Assuming you have a CETMANAGEMENT model
import { Center } from './Center';  // Assuming you have a Center model
import { User } from './User';  // Assuming you have a User model

@Table({
  tableName: 'driverhealthcheckups',
  timestamps: true,
})
export class driverhealthcheckup extends Model {
  @Column
  is_submited: boolean;

  @Column
  createdBy: number;

  @Column
  user_id: number;

  @Column
  doctor_id: number;

  @Column
  uniqueId: string;

  @Column
  external_id: string;

  @Column
  accept_term_condition: boolean;

  @Column
  driver_id: number;

  @Column
  package_and_test_history: string;

  @Column
  driver_details: string;

  @Column
  transpoter: number;

  @Column
  driver_type: string;

  @Column
  vehicle_no: string;

  @Column
  signature: string;

  @Column
  date_time: string;

  @Column
  unique_code: string;

  @Column
  spo2_unit: string;

  @Column
  temperature_unit: string;

  @Column
  pulse_unit: string;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  package_list: string[];

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  selected_package_name: string[];

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  selected_package_list: string[];

  @Column
  verify_option: string;

  @Column({ type: DataType.JSON })
  bmi_unit: object;

  @Column
  contactNumber: string;

  @Column({ type: DataType.JSON })
  haemoglobin_unit: object;

  @Column
  patient_type: string;

  @Column({ type: DataType.JSON })
  random_blood_sugar_unit: object;

  @Column({ type: DataType.JSON })
  hearing_unit: object;

  @Column({ type: DataType.JSON })
  cholesterol_unit: object;

  @Column({ type: DataType.JSON })
  selected_test: object;

  @Column({ type: DataType.JSON })
  blood_pressure_unit: object;

  @Column({ type: DataType.JSON })
  ecg_unit: object;

  @Column
  doc: string;

  @Column
  confirm_report: string;

  @BelongsTo(() => DRIVERMASTER, { foreignKey: 'driver_id', as: 'driver' })
  driver: DRIVERMASTER;

  @BelongsTo(() => Doctor, { foreignKey: 'doctor_id', as: 'doctor' })
  doctor: Doctor;

  @BelongsTo(() => CETMANAGEMENT, { foreignKey: 'transpoter', as: 'CETMANAGEMENT' })
  CETMANAGEMENT: CETMANAGEMENT;

  @BelongsTo(() => Center, { foreignKey: 'createdBy', as: 'center' })
  center: Center;

  @BelongsTo(() => User, { foreignKey: 'user_id', as: 'user' })
  user: User;
}
