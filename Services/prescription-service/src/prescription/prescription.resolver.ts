import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { PrescriptionService } from './prescription.service';
import { Prescription } from './entities/prescription.entity';
import { CreatePrescriptionInput } from './dto/create-prescription.input';
import { UpdatePrescriptionInput } from './dto/update-prescription.input';
import { Patient } from './entities/patient.entity';
import { Medicine } from './entities/medicine.entity';

@Resolver(() => Prescription)
export class PrescriptionResolver {
  constructor(private readonly precsriptionService: PrescriptionService) {}


  
  @Mutation(() => Prescription)
  createPrecsription(@Args('createPrecsriptionInput') createPrecsriptionInput: CreatePrescriptionInput) {
    return this.precsriptionService.create(createPrecsriptionInput);
  }

  @Query(() => [Prescription], { name: 'getAllPrecsription' })
  findAll() {
    return this.precsriptionService.findAll();
  }

  @Query(() => Prescription, { name: 'findprecsriptionByID' })
  findOne(@Args('id') id: string) {
    return this.precsriptionService.findOne(id);
  }

  @Mutation(() => Prescription)
  updatePrecsription(@Args('updatePrecsriptionInput') updatePrecsriptionInput: UpdatePrescriptionInput) {
    return this.precsriptionService.update(updatePrecsriptionInput.id, updatePrecsriptionInput);
  }

  @Mutation(() => Prescription)
  removePrecsription(@Args('id')id: string) {
    return this.precsriptionService.remove(id);
  }

  @ResolveField((of)=>Patient)
  patient(@Parent() prescription:Prescription){
    return {__typename:"Patient",id:prescription.PatientID}
  }

  @ResolveField((of)=>[Medicine])
  medicines(@Parent() prescription:Prescription){
    return prescription.MedicineID.map(id => {
      console.log(id);
      return {__typename:"Medicine",id: id};
    });
  }
  
  // @ResolveField((of)=>[Medicine])
  // medicines(@Parent() prescription:Prescription){
  //   console.log(prescription.MedicineID);
  //   return {__typename:"Medicine",id:prescription.MedicineID}
  // }
  

}
