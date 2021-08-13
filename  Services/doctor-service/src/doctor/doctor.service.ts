import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDoctorInput } from './dto/create-doctor.input';
import { UpdateDoctorInput } from './dto/update-doctor.input';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorService {

  constructor(@InjectRepository(Doctor)private doctorRepository: Repository<Doctor>){

  }

  create(createDoctorInput: CreateDoctorInput) {
    let doctor=this.doctorRepository.create(createDoctorInput);
    return this.doctorRepository.save(doctor);
  }

  findAll() {
    return this.doctorRepository.find();
  }

  findOne(id: string) {
    return this.doctorRepository.findOne(id);
  }

  update(id: string, updateDoctorInput: UpdateDoctorInput) {
    let doctor: Doctor = this.doctorRepository.create(updateDoctorInput)
    doctor.RegID = id;
    return this.doctorRepository.save(doctor)
  }

  remove(id: string) {
    return this.doctorRepository.delete(id);
  }
}
