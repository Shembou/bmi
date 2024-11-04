import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm'
import 'reflect-metadata'
import { hashPassword } from '@/utils/passwordManager'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  username!: string

  @Column()
  password!: string

  @BeforeInsert()
  async hashPassword() {
    this.password = await hashPassword(this.password)
  }
}
