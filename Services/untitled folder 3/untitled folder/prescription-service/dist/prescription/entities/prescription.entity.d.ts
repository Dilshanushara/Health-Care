import { Patient } from './patient.entity';
export declare class Prescription {
    id: string;
    Subject: string;
    Medicine: string;
    Comments: string;
    patient: Patient;
    PatientID: string;
}
