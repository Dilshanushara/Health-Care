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
exports.MedicineResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const medicine_service_1 = require("./medicine.service");
const medicine_entity_1 = require("./entities/medicine.entity");
const create_medicine_input_1 = require("./dto/create-medicine.input");
const update_medicine_input_1 = require("./dto/update-medicine.input");
let MedicineResolver = class MedicineResolver {
    constructor(medicineService) {
        this.medicineService = medicineService;
    }
    createMedicine(createMedicineInput) {
        return this.medicineService.create(createMedicineInput);
    }
    findAll() {
        return this.medicineService.findAll();
    }
    findOne(id) {
        return this.medicineService.findOne(id);
    }
    updateMedicine(updateMedicineInput) {
        return this.medicineService.update(updateMedicineInput.id, updateMedicineInput);
    }
    removeMedicine(id) {
        return this.medicineService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => medicine_entity_1.Medicine),
    __param(0, graphql_1.Args('createMedicineInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_medicine_input_1.CreateMedicineInput]),
    __metadata("design:returntype", void 0)
], MedicineResolver.prototype, "createMedicine", null);
__decorate([
    graphql_1.Query(() => [medicine_entity_1.Medicine], { name: 'getAllmedicine' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MedicineResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => medicine_entity_1.Medicine, { name: 'getMedicineByID' }),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicineResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => medicine_entity_1.Medicine),
    __param(0, graphql_1.Args('updateMedicineInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_medicine_input_1.UpdateMedicineInput]),
    __metadata("design:returntype", void 0)
], MedicineResolver.prototype, "updateMedicine", null);
__decorate([
    graphql_1.Mutation(() => medicine_entity_1.Medicine),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicineResolver.prototype, "removeMedicine", null);
MedicineResolver = __decorate([
    graphql_1.Resolver(() => medicine_entity_1.Medicine),
    __metadata("design:paramtypes", [medicine_service_1.MedicineService])
], MedicineResolver);
exports.MedicineResolver = MedicineResolver;
//# sourceMappingURL=medicine.resolver.js.map