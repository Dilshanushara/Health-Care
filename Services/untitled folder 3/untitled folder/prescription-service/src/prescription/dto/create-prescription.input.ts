import { InputType, Int, Field } from '@nestjs/graphql';


@InputType()
export class CreatePrescriptionInput {
  @Field()
  Subject:string
  @Field()
  Medicine:string
  @Field()
  Comments:string
  @Field()
  PatientID:string

}