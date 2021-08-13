import { Repository } from 'typeorm';
import { CreateMedicineInput } from './dto/create-medicine.input';
import { UpdateMedicineInput } from './dto/update-medicine.input';
import { Medicine } from './entities/medicine.entity';
export declare class MedicineService {
    private medicineRepository;
    constructor(medicineRepository: Repository<Medicine>);
    create(createMedicineInput: CreateMedicineInput): Promise<Medicine>;
    findAll(): Promise<Medicine[]>;
    findOne(id: string): Promise<Medicine>;
    update(id: string, updateMedicineInput: UpdateMedicineInput): Promise<Medicine>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    findMedicines(ids: string[]): Promise<Medicine[]>;
}
