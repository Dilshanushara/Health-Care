import { InputType, Int, Field } from '@nestjs/graphql';
import { Medicine } from '../entities/medicine.entity';


@InputType()
export class CreatePrescriptionInput {
  @Field()
  Subject:string
  @Field()
  Comments:string
  @Field()
  PatientID:string
  @Field(() => [String])
  MedicineID:string[]

}