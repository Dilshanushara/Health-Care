import { Resolver, Query, Mutation, Args, Int, ResolveReference } from '@nestjs/graphql';
import { MedicineService } from './medicine.service';
import { Medicine } from './entities/medicine.entity';
import { CreateMedicineInput } from './dto/create-medicine.input';
import { UpdateMedicineInput } from './dto/update-medicine.input';

@Resolver(() => Medicine)
export class MedicineResolver {
  constructor(private readonly medicineService: MedicineService) {}

  @Mutation(() => Medicine)
  createMedicine(@Args('createMedicineInput') createMedicineInput: CreateMedicineInput) {
    return this.medicineService.create(createMedicineInput);
  }

  @Query(() => [Medicine], { name: 'getAllmedicine' })
  findAll() {
    return this.medicineService.findAll();
  }

  @Query(() => Medicine, { name: 'getMedicineByID' })
  findOne(@Args('id') id: string) {
    return this.medicineService.findOne(id);
  }

  @Mutation(() => Medicine)
  updateMedicine(@Args('updateMedicineInput') updateMedicineInput: UpdateMedicineInput) {
    return this.medicineService.update(updateMedicineInput.id, updateMedicineInput);
  }

  @Mutation(() => Medicine)
  removeMedicine(@Args('id') id: string) {
    return this.medicineService.remove(id);
  }

  @ResolveReference ()
  resolvereference(ref: {__typename:string,id:string}){
      return this.medicineService.findOne(ref.id);
  }


}
