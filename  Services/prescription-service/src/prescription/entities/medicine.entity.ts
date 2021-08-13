import { Directive, Field, ID, ObjectType } from "@nestjs/graphql"
import { Prescription } from "./prescription.entity"


@ObjectType()
@Directive('@extends')
@Directive('@key(fields:"id")')
export class Medicine{
    @Field((type)=>ID)
    @Directive('@external')
    id:string

    // @Field((type)=>[Prescription])
    // prescription :Prescription[]
    
}