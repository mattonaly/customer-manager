import { configDotenv } from 'dotenv';
import { DataSource } from 'typeorm';

import { Customer } from '../entities/customer';

configDotenv();

export const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [Customer],
});
