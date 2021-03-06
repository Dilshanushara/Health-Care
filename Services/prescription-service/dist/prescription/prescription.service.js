"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrescriptionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const prescription_entity_1 = require("./entities/prescription.entity");
let PrescriptionService = class PrescriptionService {
    constructor(prescriptionRepository) {
        this.prescriptionRepository = prescriptionRepository;
    }
    create(createPrecsriptionInput) {
        let prescription = this.prescriptionRepository.create(createPrecsriptionInput);
        return this.prescriptionRepository.save(prescription);
    }
    findAll() {
        return this.prescriptionRepository.find();
    }
    findOne(id) {
        return this.prescriptionRepository.findOne(id);
    }
    update(id, updatePrecsriptionInput) {
        let prescription = this.prescriptionRepository.create(updatePrecsriptionInput);
        prescription.id = id;
        return this.prescriptionRepository.save(prescription);
    }
    remove(id) {
        return this.prescriptionRepository.delete(id);
    }
    forPatient(id) {
        return this.prescriptionRepository.find({ "PatientID": id });
    }
    forMedicine(id) {
        return this.prescriptionRepository.find({ ["MedicineID"]: id });
    }
};
PrescriptionService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(prescription_entity_1.Prescription)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PrescriptionService);
exports.PrescriptionService = PrescriptionService;
//# sourceMappingURL=prescription.service.js.map