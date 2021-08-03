import { Field, InputType, ObjectType } from "@nestjs/graphql"
import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm"

@InputType()
export class CreatePatientInput{

    @Field()
    FirstName:string
    @Field()
    LastName:string
    @Field()
    DOB:string
    @Field()
    Address:string
    @Field()
    FatherName:string



}