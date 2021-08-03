import { CreateDoctorInput } from './create-doctor.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDoctorInput {
  
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
