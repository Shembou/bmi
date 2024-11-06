import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import 'reflect-metadata'

@Entity()
export class Subscriber {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  age!: number

  @Column()
  gender!: 'male' | 'female'

  @Column('int')
  weight!: number

  @Column('int')
  height!: number

  @Column('int')
  pressure!: number

  @Column()
  isSmoking!: boolean

  @Column('int')
  cholesterol!: number

  @Column()
  name!: string

  @Column({ unique: true })
  email!: string

  @Column()
  phone!: string

  @Column({ type: 'longblob' })
  files!: Buffer
}
