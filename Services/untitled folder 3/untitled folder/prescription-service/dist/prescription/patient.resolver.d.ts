import { Patient } from "./entities/patient.entity";
import { Prescription } from "./entities/prescription.entity";
import { PrescriptionService } from "./prescription.service";
export declare class PatientResolver {
    private readonly prescriptionservice;
    constructor(prescriptionservice: PrescriptionService);
    prescription(patient: Patient): Promise<Prescription[]>;
}
