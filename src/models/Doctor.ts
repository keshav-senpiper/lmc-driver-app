import { Column, Model, Table, BelongsTo } from 'sequelize-typescript';
import { User } from './User';  // Assuming you have a User model

@Table({
  tableName: 'doctors',
  timestamps: true,
})
export class Doctor extends Model {
  @Column
  external_id: string;

  @Column
  user_id: number;

  @Column
  registration_number: string;

  @Column
  qualification: string;

  @Column
  signature: string;

  @Column
  contact_number: string;

  @Column
  file_name: string;

  @BelongsTo(() => User, { foreignKey: 'user_id', as: 'User' })
  user: User;
}
