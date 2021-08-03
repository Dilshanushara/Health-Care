import { Medicine } from './medicine.entity';
import { Patient } from './patient.entity';
export declare class Prescription {
    id: string;
    Subject: string;
    Comments: string;
    patient: Patient;
    PatientID: string;
    medicines: Medicine[];
    MedicineID: string;
}
