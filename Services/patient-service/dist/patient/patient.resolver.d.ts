import { CreatePatientInput } from './dto/create-patient.input';
import { UpdatePatientinput } from './dto/update-patient.input';
import { Patient } from './entity/patient.entity';
import { PatientService } from './patient.service';
export declare class PatientResolver {
    private PatientService;
    constructor(PatientService: PatientService);
    findAll(): Promise<Patient[]>;
    createPatient(createpatientdto: CreatePatientInput): Promise<Patient>;
    findOne(id: string): Promise<Patient>;
    update(updatepatientdto: UpdatePatientinput): Promise<Patient>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    resolvereference(ref: {
        __typename: string;
        id: string;
    }): Promise<Patient>;
}
