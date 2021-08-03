import { MedicineService } from './medicine.service';
import { Medicine } from './entities/medicine.entity';
import { CreateMedicineInput } from './dto/create-medicine.input';
import { UpdateMedicineInput } from './dto/update-medicine.input';
export declare class MedicineResolver {
    private readonly medicineService;
    constructor(medicineService: MedicineService);
    createMedicine(createMedicineInput: CreateMedicineInput): Promise<Medicine>;
    findAll(): Promise<Medicine[]>;
    findOne(id: string): Promise<Medicine>;
    updateMedicine(updateMedicineInput: UpdateMedicineInput): Promise<Medicine>;
    removeMedicine(id: string): Promise<import("typeorm").DeleteResult>;
}
