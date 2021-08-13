import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DoctorService } from './doctor.service';
import { Doctor } from './entities/doctor.entity';
import { CreateDoctorInput } from './dto/create-doctor.input';
import { UpdateDoctorInput } from './dto/update-doctor.input';

@Resolver(() => Doctor)
export class DoctorResolver {
  constructor(private readonly doctorService: DoctorService) {}

  @Mutation(() => Doctor)
  createDoctor(@Args('createDoctorInput') createDoctorInput: CreateDoctorInput) {
    return this.doctorService.create(createDoctorInput);
  }

  @Query(() => [Doctor], { name: 'getAlldoctors' })
  findAll() {
    return this.doctorService.findAll();
  }

  @Query(() => Doctor, { name: 'finddoctorbyID' })
  findOne(@Args('id')id: string) {
    return this.doctorService.findOne(id);
  }

  @Mutation(() => Doctor)
  updateDoctor(@Args('updateDoctorInput') updateDoctorInput: UpdateDoctorInput) {
    return this.doctorService.update(updateDoctorInput.RegID, updateDoctorInput);
  }

  @Mutation(() => Doctor)
  removeDoctor(@Args('id') id: string) {
    return this.doctorService.remove(id);
  }
}
