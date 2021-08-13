import { CreatePrescriptionInput } from './create-prescription.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePrescriptionInput{
  @Field()
  id:string
  @Field()
  Subject:string
  @Field()
  Medicine:string
  @Field()
  Comments:string
}
