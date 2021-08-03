import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePrescriptionInput } from './dto/create-prescription.input';
import { UpdatePrescriptionInput } from './dto/update-prescription.input';
import { Prescription } from './entities/prescription.entity';

@Injectable()
export class PrescriptionService {
  constructor(@InjectRepository(Prescription)private prescriptionRepository:Repository<Prescription>){}

  create(createPrecsriptionInput: CreatePrescriptionInput) {
    let prescription=this.prescriptionRepository.create(createPrecsriptionInput);
    return this.prescriptionRepository.save(prescription);
  }

  findAll() {
    return this.prescriptionRepository.find();
  }

  findOne(id: string) {
    return this.prescriptionRepository.findOne(id);
  }

  update(id: string, updatePrecsriptionInput: UpdatePrescriptionInput) {
    let prescription:Prescription=this.prescriptionRepository.create(updatePrecsriptionInput);
    prescription.id=id;
    return this.prescriptionRepository.save(prescription);
  }

  remove(id: string) {
    return this.prescriptionRepository.delete(id);
  }


  forPatient(id:string){
    return this.prescriptionRepository.find( {"PatientID":id} )

  }
}
