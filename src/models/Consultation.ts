import { Column, Model, Table, ForeignKey, DataType, PrimaryKey } from 'sequelize-typescript';
import { DRIVERMASTER } from './DriverMaster';
import { Prescription } from './Prescription';

@Table({
  tableName: 'Consultations',
  timestamps: true,
})
export class Consultation extends Model {
  @PrimaryKey
  @Column({ 
    type: DataType.STRING,
    allowNull: false
  })
  consultation_id : string;

  @Column
  driver_contactNumber: string;
  
  @Column
  driver_id: number;

  @Column
  external_id: string;















































































  
  @Column
  driver_cetID: number;

  @Column
  driver_employeeID: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isBooked: boolean;

  @Column({
    type: DataType.DATE,
  })
  scheduled_time: Date;

  @ForeignKey(() => Prescription)
  @Column
  prescription_id: string;

  @Column
  meet_link: string;

  @Column
  doctor_id: number;

  @Column
  doctor_name: string;
}
