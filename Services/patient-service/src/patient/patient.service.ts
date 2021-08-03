import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePatientInput } from './dto/create-patient.input';
import { UpdatePatientinput } from './dto/update-patient.input';
import { Patient } from './entity/patient.entity';

@Injectable()
export class PatientService {

    constructor(@InjectRepository(Patient) private PateintRepository:Repository<Patient>){

    }

    FindAll(){
        return this.PateintRepository.find();
    }

    Create(createpatientdto:CreatePatientInput){
        let patient=  this.PateintRepository.create(createpatientdto);
        return this.PateintRepository.save(patient);

    }

    FindOne(id:string){
       return this.PateintRepository.findOne(id);
        
    }

    Update(id:string,updatepatientinput:UpdatePatientinput){
        let patient :Patient=this.PateintRepository.create(updatepatientinput);
        patient.id=id;
        return this.PateintRepository.save(patient)
    }

    Delete(id:string){
       return this.PateintRepository.delete(id);
        }

}
