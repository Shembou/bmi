import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from '../entities/User'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'admin',
  database: process.env.DB_DATABASE || 'szpital',
  synchronize: true, // Disable in production
  logging: true,
  entities: [User]
})
