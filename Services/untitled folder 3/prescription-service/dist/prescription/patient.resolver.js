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
exports.PatientResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const patient_entity_1 = require("./entities/patient.entity");
const prescription_service_1 = require("./prescription.service");
let PatientResolver = class PatientResolver {
    constructor(prescriptionservice) {
        this.prescriptionservice = prescriptionservice;
    }
    prescription(patient) {
        return this.prescriptionservice.forPatient(patient.id);
    }
};
__decorate([
    graphql_1.ResolveField((of) => [patient_entity_1.Patient]),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [patient_entity_1.Patient]),
    __metadata("design:returntype", Promise)
], PatientResolver.prototype, "prescription", null);
PatientResolver = __decorate([
    graphql_1.Resolver((of) => patient_entity_1.Patient),
    __metadata("design:paramtypes", [prescription_service_1.PrescriptionService])
], PatientResolver);
exports.PatientResolver = PatientResolver;
//# sourceMappingURL=patient.resolver.js.map