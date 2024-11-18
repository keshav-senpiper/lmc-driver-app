import { Column, Model, Table, HasOne, HasMany, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Doctor } from './Doctor';  // Assuming you have a Doctor model
import { Centeruser } from './CenterUser';  // Assuming you have a Centeruser model
import { Center } from './Center';  // Assuming you have a Center model
import { Role } from './Role';  // Assuming you have a Role model
import { Permission } from './Permissions';  // Assuming you have a Permission model
import { Cetuser } from './CetUser';  // Assuming you have a Cetuser model
import { CETMANAGEMENT } from './CetManagement';  // Assuming you have a CETMANAGEMENT model

@Table({
  tableName: 'users',
  timestamps: true,
})
export class User extends Model {
  @Column
  username: string;

  @Column
  name: string;

  @Column
  role_id: bigint;

  @Column
  permission_id: bigint;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  phone: string;

  @Column
  isAdmin: boolean;

  @Column
  status: boolean;

  @Column
  external_id: string;

  // Associations
  @HasOne(() => Doctor, { foreignKey: 'user_id', as: 'doctor' })
  doctor: Doctor;

  @HasMany(() => Centeruser, { foreignKey: 'user_id', as: 'centerusers' })
  centerusers: Centeruser[];

  @BelongsToMany(() => Center, {
    through: () => Centeruser,
    foreignKey: 'user_id',
    otherKey: 'center_id',
    as: 'centers'
  })
  centers: Center[];

  @BelongsTo(() => Role, { foreignKey: 'role_id', as: 'role' })
  role: Role;

  @BelongsTo(() => Permission, { foreignKey: 'permission_id', as: 'permission' })
  permission: Permission;

  @HasMany(() => Cetuser, { foreignKey: 'user_id', as: 'Cetusers' })
  Cetusers: Cetuser[];

  @BelongsToMany(() => CETMANAGEMENT, {
    through: () => Cetuser,
    foreignKey: 'user_id',
    otherKey: 'cet_id',
    as: 'CETManagements'
  })
  CETManagements: CETMANAGEMENT[];
}
