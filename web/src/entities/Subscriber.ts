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

  @Column('bigint')
  pesel!: number

  @Column({ type: 'date', nullable: true })
  dateOfBirth!: Date

  @Column()
  placeOfBirth!: string

  @Column()
  education!: string

  @Column()
  foreignOrigin!: boolean

  @Column()
  foreignCountry!: boolean

  @Column()
  nationalMinority!: string

  @Column()
  isHomeless!: boolean

  @Column()
  isDisabled!: string

  @Column()
  phone!: string

  @Column({ unique: true })
  email!: string

  @Column()
  voivodeship!: string

  @Column()
  district!: string

  @Column()
  commune!: string

  @Column()
  town!: string

  @Column()
  postalCode!: string

  @Column()
  houseNumber!: string

  @Column()
  localNumber!: string

  @Column()
  areaOfResidence!: 'DEGURBA1' | 'DEGURBA2' | 'DEGURBA3'

  @Column()
  status!:
    | 'selfEmployed'
    | 'publicGovernmentAdministrationWorker'
    | 'localGovernmentAdministrationWorker'
    | 'nonGovernmentalOrganizationWorker'
    | 'MSMEWorker'
    | 'largeEnterpriseWorker'
    | 'medicalActivitiesWorker'
    | 'schoolWorkerTeachingStaff'
    | 'schoolWorkerNonTeachingStaff'
    | 'schoolWorkerAdministrationStaff'
    | 'universityWorker'
    | 'scientificInstituteWorker'
    | 'researchInstituteWorker'
    | 'ŁukasiewiczResearchNetworkWorker'
    | 'internationalInstituteWorker'
    | 'federationOfHigherEducationAndScienceSystemEntitiesWorker'
    | 'stateLegalEntityWorker'
    | 'other'
    | ''

  @Column()
  shiftChanges!: boolean

  @Column({ type: 'longblob' })
  files!: Buffer
}
