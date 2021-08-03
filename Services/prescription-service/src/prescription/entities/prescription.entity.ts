import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Medicine } from './medicine.entity';
import { Patient } from './patient.entity';

@ObjectType('Prescription')
@Directive('@key(fields: "id")')
@Entity()
export class Prescription {
  @Field((type)=>ID)
  @PrimaryGeneratedColumn('uuid')
  id:string
  @Field()
  @Column()
  Subject:string

  @Field()
  @Column()
  Comments:string

  @Field(()=>Patient)
  patient:Patient

  @Field()
  @Column()
  PatientID:string

  @Field(()=>Medicine)
  medicines:Medicine[]

  @Field()
  @Column()
  MedicineID:string

}
