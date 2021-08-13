import { CreateMedicineInput } from './create-medicine.input';
declare const UpdateMedicineInput_base: import("@nestjs/common").Type<Partial<CreateMedicineInput>>;
export declare class UpdateMedicineInput extends UpdateMedicineInput_base {
    id: string;
    Name: string;
    Type: string;
    Dosage: string;
}
export {};
