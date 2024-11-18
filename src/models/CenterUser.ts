import { Column, Model, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { User } from './User';
import { Center } from './Center';
@Table({
  tableName: 'centerusers',  // Define the table name
  timestamps: true,          // Enable timestamps if needed
})
export class Centeruser extends Model {

  @Column
  signature: string;

  @ForeignKey(() => Center)
  @Column
  center_id: bigint;

  // Foreign key for User
  @ForeignKey(() => User)
  @Column
  user_id: number;

  // Associations
  @BelongsTo(() => User, { foreignKey: 'user_id', as: 'user' })
  user: User;

  @BelongsTo(() => Center, { foreignKey: 'center_id', as: 'center' })
  center: Center;
}
