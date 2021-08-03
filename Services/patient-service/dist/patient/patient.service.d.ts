import { Repository } from 'typeorm';
import { CreatePatientInput } from './dto/create-patient.input';
import { UpdatePatientinput } from './dto/update-patient.input';
import { Patient } from './entity/patient.entity';
export declare class PatientService {
    private PateintRepository;
    constructor(PateintRepository: Repository<Patient>);
    FindAll(): Promise<Patient[]>;
    Create(createpatientdto: CreatePatientInput): Promise<Patient>;
    FindOne(id: string): Promise<Patient>;
    Update(id: string, updatepatientinput: UpdatePatientinput): Promise<Patient>;
    Delete(id: string): Promise<import("typeorm").DeleteResult>;
}
