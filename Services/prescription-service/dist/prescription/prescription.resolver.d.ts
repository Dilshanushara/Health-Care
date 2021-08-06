import { PrescriptionService } from './prescription.service';
import { Prescription } from './entities/prescription.entity';
import { CreatePrescriptionInput } from './dto/create-prescription.input';
import { UpdatePrescriptionInput } from './dto/update-prescription.input';
export declare class PrescriptionResolver {
    private readonly precsriptionService;
    constructor(precsriptionService: PrescriptionService);
    createPrecsription(createPrecsriptionInput: CreatePrescriptionInput): Promise<Prescription>;
    findAll(): Promise<Prescription[]>;
    findOne(id: string): Promise<Prescription>;
    updatePrecsription(updatePrecsriptionInput: UpdatePrescriptionInput): Promise<Prescription>;
    removePrecsription(id: string): Promise<import("typeorm").DeleteResult>;
    patient(prescription: Prescription): {
        __typename: string;
        id: string;
    };
    medicines(prescription: Prescription): {
        __typename: string;
        id: string[];
    };
}
