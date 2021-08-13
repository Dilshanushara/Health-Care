import { Repository } from 'typeorm';
import { CreateDoctorInput } from './dto/create-doctor.input';
import { UpdateDoctorInput } from './dto/update-doctor.input';
import { Doctor } from './entities/doctor.entity';
export declare class DoctorService {
    private doctorRepository;
    constructor(doctorRepository: Repository<Doctor>);
    create(createDoctorInput: CreateDoctorInput): Promise<Doctor>;
    findAll(): Promise<Doctor[]>;
    findOne(id: string): Promise<Doctor>;
    update(id: string, updateDoctorInput: UpdateDoctorInput): Promise<Doctor>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
