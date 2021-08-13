import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@ObjectType()
@Entity()
@Directive('@key(fields: "id")')
export class Medicine {
  @Field((type)=>ID)
  @PrimaryGeneratedColumn('uuid')
  id:string
  @Field()
  @Column()
  Name:string
  @Field()
  @Column()
  Type:string
  @Field()
  @Column()
  Dosage:string


}
