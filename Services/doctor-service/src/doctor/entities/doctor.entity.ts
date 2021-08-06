import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Doctor {
  
  @Field()
  @PrimaryColumn()
  RegID: string;
  @Field()
  @Column()
  FirstName:string
  @Field()
  @Column()
  LastName:string  
  @Field()
  @Column()
  DOB:string
  @Field()
  @Column()
  Gender:string
  @Field()
  @Column()
  Address:string
  @Field()
  @Column()
  ContactNumber:string
  @Field(()=>[String])
  @Column("text", {array: true})
  Number:string[]
}
