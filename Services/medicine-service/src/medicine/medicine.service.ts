import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMedicineInput } from './dto/create-medicine.input';
import { UpdateMedicineInput } from './dto/update-medicine.input';
import { Medicine } from './entities/medicine.entity';

@Injectable()
export class MedicineService {
  constructor(@InjectRepository(Medicine)private medicineRepository:Repository<Medicine>){}
  
  create(createMedicineInput: CreateMedicineInput) {
    let medicine=this.medicineRepository.create(createMedicineInput);
    return this.medicineRepository.save(medicine)
  }

  findAll() {
    return this.medicineRepository.find();
  }

  findOne(id: string) {
    return this.medicineRepository.findOne(id)
  }

  update(id: string, updateMedicineInput: UpdateMedicineInput) {
    let medicine:Medicine=this.medicineRepository.create(updateMedicineInput);
    medicine.id=id;
    return this.medicineRepository.save(medicine);
  }

  remove(id: string) {
    return this.medicineRepository.delete(id);
  }

}
