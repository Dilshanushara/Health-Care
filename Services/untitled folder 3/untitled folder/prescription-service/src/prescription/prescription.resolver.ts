import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { PrescriptionService } from './prescription.service';
import { Prescription } from './entities/prescription.entity';
import { CreatePrescriptionInput } from './dto/create-prescription.input';
import { UpdatePrescriptionInput } from './dto/update-prescription.input';
import { Patient } from './entities/patient.entity';

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
  owner(@Parent() prescription:Prescription){
    return {__typename:"Patient",id:prescription.PatientID}
  }
}
