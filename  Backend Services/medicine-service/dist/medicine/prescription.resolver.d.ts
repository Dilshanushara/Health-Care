import { Medicine } from "./entities/medicine.entity";
import { Prescription } from "./entities/prescription.entity";
import { MedicineService } from "./medicine.service";
export declare class PrescriptionResolver {
    private readonly medicineservice;
    constructor(medicineservice: MedicineService);
    medicines(prescription: Prescription): Promise<Medicine[]>;
}
