import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { Apartment } from '../models/Apartment';

dotenv.config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  models: [Apartment],
  logging: false
});

export default sequelize;
