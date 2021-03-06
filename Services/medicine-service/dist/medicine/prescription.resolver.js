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
exports.PrescriptionResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const prescription_entity_1 = require("./entities/prescription.entity");
const medicine_service_1 = require("./medicine.service");
let PrescriptionResolver = class PrescriptionResolver {
    constructor(medicineservice) {
        this.medicineservice = medicineservice;
    }
    medicines(prescription) {
        return this.medicineservice.forPrescription(prescription.id);
    }
};
__decorate([
    graphql_1.ResolveField((of) => [prescription_entity_1.Prescription]),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [prescription_entity_1.Prescription]),
    __metadata("design:returntype", Promise)
], PrescriptionResolver.prototype, "medicines", null);
PrescriptionResolver = __decorate([
    graphql_1.Resolver((of) => prescription_entity_1.Prescription),
    __metadata("design:paramtypes", [medicine_service_1.MedicineService])
], PrescriptionResolver);
exports.PrescriptionResolver = PrescriptionResolver;
//# sourceMappingURL=prescription.resolver.js.map