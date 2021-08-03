import { DoctorService } from './doctor.service';
import { Doctor } from './entities/doctor.entity';
import { CreateDoctorInput } from './dto/create-doctor.input';
import { UpdateDoctorInput } from './dto/update-doctor.input';
export declare class DoctorResolver {
    private readonly doctorService;
    constructor(doctorService: DoctorService);
    createDoctor(createDoctorInput: CreateDoctorInput): Promise<Doctor>;
    findAll(): Promise<Doctor[]>;
    findOne(id: string): Promise<Doctor>;
    updateDoctor(updateDoctorInput: UpdateDoctorInput): Promise<Doctor>;
    removeDoctor(id: string): Promise<import("typeorm").DeleteResult>;
}
