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
exports.MedicineService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const medicine_entity_1 = require("./entities/medicine.entity");
let MedicineService = class MedicineService {
    constructor(medicineRepository) {
        this.medicineRepository = medicineRepository;
    }
    create(createMedicineInput) {
        let medicine = this.medicineRepository.create(createMedicineInput);
        return this.medicineRepository.save(medicine);
    }
    findAll() {
        return this.medicineRepository.find();
    }
    findOne(id) {
        return this.medicineRepository.findOne(id);
    }
    update(id, updateMedicineInput) {
        let medicine = this.medicineRepository.create(updateMedicineInput);
        medicine.id = id;
        return this.medicineRepository.save(medicine);
    }
    remove(id) {
        return this.medicineRepository.delete(id);
    }
    async findMedicines(ids) {
        let medicines = [];
        for (let id of ids) {
            console.log(id);
            medicines.push(await this.medicineRepository.findOne(id));
        }
        console.log("===========" + medicines);
        return medicines;
    }
};
MedicineService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(medicine_entity_1.Medicine)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MedicineService);
exports.MedicineService = MedicineService;
//# sourceMappingURL=medicine.service.js.map