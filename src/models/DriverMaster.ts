import { Column, Model, Table, HasOne, DataType} from 'sequelize-typescript';
import { DRIVERFAMILYHISTORY } from './DriverFamilyHistory';  // Assuming you have a DRIVERFAMILYHISTORY model
import { DRIVERMASTERPERSONAL } from './DriverMasterPersonal';  // Assuming you have a DRIVERMASTERPERSONAL model

@Table({
  tableName: 'DRIVERMASTERs',
  timestamps: true,
})
export class DRIVERMASTER extends Model {
  @Column
  driver_cetid: number;

  @Column
  driver_cetname: string;

  @Column
  external_id: string;

  @Column
  createdBy: number;

  @Column
  name: string;

  @Column
  healthCardNumber: string;

  @Column
  driverId: number;

  @Column
  abhaNumber: string;

  @Column
  dateOfBirthOrAge: string;

  @Column({
    type: DataType.ENUM('Male', 'Female', 'Other')
  })
  gender: string;

  @Column
  photographOfDriver: string;

  @Column
  localAddress: string;

  @Column
  localAddressDistrict: string;

  @Column
  localAddressState: string;

  @Column
  contactNumber: string;

  @Column
  emergencyContactName: string;

  @Column
  emergencyContactNumber: string;

  @Column
  idProof_name: string;

  @Column
  idProof: string;

  @Column
  idProof_number: string;

  @Column
  idProof_doc: string;

  @Column
  blood_group: string;

  // Associations
  @HasOne(() => DRIVERFAMILYHISTORY, { foreignKey: 'driver_id' })
  driverFamilyHistory: DRIVERFAMILYHISTORY;

  @HasOne(() => DRIVERMASTERPERSONAL, { foreignKey: 'driver_id' })
  driverMasterPersonal: DRIVERMASTERPERSONAL;
}
