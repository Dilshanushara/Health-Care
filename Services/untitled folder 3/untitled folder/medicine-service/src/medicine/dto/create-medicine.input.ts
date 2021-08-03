import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMedicineInput {
  @Field()
  Name:string
  @Field()
  Type:string
  @Field()
  Dosage:string
}
