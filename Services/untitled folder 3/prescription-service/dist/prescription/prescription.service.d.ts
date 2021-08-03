import { Repository } from 'typeorm';
import { CreatePrescriptionInput } from './dto/create-prescription.input';
import { UpdatePrescriptionInput } from './dto/update-prescription.input';
import { Prescription } from './entities/prescription.entity';
export declare class PrescriptionService {
    private prescriptionRepository;
    constructor(prescriptionRepository: Repository<Prescription>);
    create(createPrecsriptionInput: CreatePrescriptionInput): Promise<Prescription>;
    findAll(): Promise<Prescription[]>;
    findOne(id: string): Promise<Prescription>;
    update(id: string, updatePrecsriptionInput: UpdatePrescriptionInput): Promise<Prescription>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    forPatient(id: string): Promise<Prescription[]>;
    forMedicine(id: string): Promise<Prescription[]>;
}
