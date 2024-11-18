  import { Column, Model, Table, HasMany, BelongsToMany } from 'sequelize-typescript';
import { Centeruser } from './CenterUser';  // Assuming you have a Centeruser model
import { User } from './User';  // Assuming you have a User model

@Table({
  tableName: 'centers',  // Define table name
  timestamps: true,      // If you want Sequelize to manage createdAt/updatedAt
})
export class Center extends Model {
  @Column
  external_id: string;

  @Column
  createdBy: bigint;

  @Column
  project_start_date: string;

  @Column
  project_name: string;

  @Column
  project_unique_id: string;

  @Column
  project_district: string;

  @Column
  project_state: string;

  @Column
  project_address: string;

  @Column
  agency_name: string;

  @Column
  agency_address: string;

  @Column
  agency_district: string;

  @Column
  agency_state: string;

  @Column
  agency_spoc_name: string;

  @Column
  agency_spoc_email: string;

  @Column
  agency_spoc_contact_number: string;

  @Column
  status: boolean;

  @Column
  project_end_date: string;

  @Column
  agency_spoc_alternate_name: string;

  @Column
  agency_spoc_alternate_contact_number: string;

  @Column
  project_signed_agreement_file: string;

  @Column
  short_code: string;

  @Column
  center_shortcode: string;

  // Define associations
  @BelongsToMany(() => User, () => Centeruser)
  users: User[];

  @HasMany(() => Centeruser)
  centerusers: Centeruser[];
}
