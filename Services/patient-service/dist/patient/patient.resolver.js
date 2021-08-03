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
const create_patient_input_1 = require("./dto/create-patient.input");
const update_patient_input_1 = require("./dto/update-patient.input");
const patient_entity_1 = require("./entity/patient.entity");
const patient_service_1 = require("./patient.service");
let PatientResolver = class PatientResolver {
    constructor(PatientService) {
        this.PatientService = PatientService;
    }
    findAll() {
        return this.PatientService.FindAll();
    }
    createPatient(createpatientdto) {
        return this.PatientService.Create(createpatientdto);
    }
    findOne(id) {
        return this.PatientService.FindOne(id);
    }
    update(updatepatientdto) {
        return this.PatientService.Update(updatepatientdto.id, updatepatientdto);
    }
    remove(id) {
        return this.PatientService.Delete(id);
    }
    resolvereference(ref) {
        return this.PatientService.FindOne(ref.id);
    }
};
__decorate([
    graphql_1.Query(() => [patient_entity_1.Patient], { name: 'getAllPatients' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PatientResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Mutation(() => patient_entity_1.Patient),
    __param(0, graphql_1.Args("CreatePatientInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_patient_input_1.CreatePatientInput]),
    __metadata("design:returntype", void 0)
], PatientResolver.prototype, "createPatient", null);
__decorate([
    graphql_1.Query(() => patient_entity_1.Patient, { name: 'getpatientbyID' }),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PatientResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => patient_entity_1.Patient, { name: "updatePatient" }),
    __param(0, graphql_1.Args("UpdatePatientInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_patient_input_1.UpdatePatientinput]),
    __metadata("design:returntype", void 0)
], PatientResolver.prototype, "update", null);
__decorate([
    graphql_1.Mutation(() => patient_entity_1.Patient, { name: "deletePatient" }),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PatientResolver.prototype, "remove", null);
__decorate([
    graphql_1.ResolveReference(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PatientResolver.prototype, "resolvereference", null);
PatientResolver = __decorate([
    graphql_1.Resolver(() => patient_entity_1.Patient),
    __metadata("design:paramtypes", [patient_service_1.PatientService])
], PatientResolver);
exports.PatientResolver = PatientResolver;
//# sourceMappingURL=patient.resolver.js.map