import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  CreatedAt,
  UpdatedAt
} from 'sequelize-typescript';

export interface ApartmentAttributes {
  id?: number;
  unitName: string;
  unitNumber: string;
  project: string;
  description?: string;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ApartmentCreationAttributes
  extends Omit<ApartmentAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

@Table({ tableName: 'apartments', timestamps: true })
export class Apartment
  extends Model<ApartmentAttributes, ApartmentCreationAttributes>
  implements ApartmentAttributes
{
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id?: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  unitName!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  unitNumber!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  project!: string;

  @AllowNull(true)
  @Column(DataType.TEXT)
  description?: string;

  @AllowNull(false)
  @Column(DataType.DECIMAL)
  price!: number;

  @CreatedAt
  @AllowNull(false)
  @Column(DataType.DATE)
  createdAt?: Date;

  @UpdatedAt
  @AllowNull(false)
  @Column(DataType.DATE)
  updatedAt?: Date;
}
