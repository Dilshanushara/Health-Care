import { InputType, Int, Field } from '@nestjs/graphql';


@InputType()
export class CreateDoctorInput {
  
  @Field()
  RegID: string;
  @Field()
  FirstName:string
  @Field()
  LastName:string  
  @Field()
  DOB:string
  @Field()
  Address:string
  @Field()
  Gender:string
  @Field()
  ContactNumber:string
}
