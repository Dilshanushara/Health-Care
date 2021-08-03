import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
  Medicine:string
  @Field()
  @Column()
  Comments:string

  @Field(()=>Patient)
  patient:Patient

  @Field()
  @Column()
  PatientID:string
}
