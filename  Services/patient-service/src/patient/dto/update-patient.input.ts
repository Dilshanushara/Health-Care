import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class UpdatePatientinput{

    @Field()
    id:string
    @Field()
    FirstName:string
    @Field()
    LastName:string
    @Field()
    DOB:string
    @Field()
    Gender:string
    @Field()
    Address:string
    @Field()
    FatherName:string
    @Field()
    ContactNumber:string
}