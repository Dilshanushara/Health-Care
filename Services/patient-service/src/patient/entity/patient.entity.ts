import { Directive, Field, ID, ObjectType } from "@nestjs/graphql"
import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm"

@Entity()
@Directive('@key(fields: "id")')
@ObjectType()
export class Patient{

    @Field((type)=>ID)
    @PrimaryGeneratedColumn('uuid')
    id :string
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
    Address:string
    @Field()
    @Column()
    FatherName:string



}