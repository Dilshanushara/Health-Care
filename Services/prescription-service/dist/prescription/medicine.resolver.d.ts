import { Medicine } from "./entities/medicine.entity";
import { Prescription } from "./entities/prescription.entity";
import { PrescriptionService } from "./prescription.service";
export declare class MedicineResolver {
    private readonly prescriptionservice;
    constructor(prescriptionservice: PrescriptionService);
    prescription(medicine: Medicine): Promise<Prescription[]>;
}
