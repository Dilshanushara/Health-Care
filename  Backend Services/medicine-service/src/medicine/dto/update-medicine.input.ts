import { CreateMedicineInput } from './create-medicine.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMedicineInput extends PartialType(CreateMedicineInput) {
  @Field()
  id:string
  @Field()
  Name:string
  @Field()
  Type:string
  @Field()
  Dosage:string
}
