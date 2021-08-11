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
const prescription_service_1 = require("./prescription.service");
const prescription_entity_1 = require("./entities/prescription.entity");
const create_prescription_input_1 = require("./dto/create-prescription.input");
const update_prescription_input_1 = require("./dto/update-prescription.input");
const patient_entity_1 = require("./entities/patient.entity");
const medicine_entity_1 = require("./entities/medicine.entity");
let PrescriptionResolver = class PrescriptionResolver {
    constructor(precsriptionService) {
        this.precsriptionService = precsriptionService;
    }
    createPrecsription(createPrecsriptionInput) {
        return this.precsriptionService.create(createPrecsriptionInput);
    }
    findAll() {
        return this.precsriptionService.findAll();
    }
    findOne(id) {
        return this.precsriptionService.findOne(id);
    }
    updatePrecsription(updatePrecsriptionInput) {
        return this.precsriptionService.update(updatePrecsriptionInput.id, updatePrecsriptionInput);
    }
    removePrecsription(id) {
        return this.precsriptionService.remove(id);
    }
    patient(prescription) {
        return { __typename: "Patient", id: prescription.PatientID };
    }
    medicines(prescription) {
        return prescription.MedicineID.map(id => {
            console.log(id);
            return { __typename: "Medicine", id: id };
        });
    }
};
__decorate([
    graphql_1.Mutation(() => prescription_entity_1.Prescription),
    __param(0, graphql_1.Args('createPrecsriptionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_prescription_input_1.CreatePrescriptionInput]),
    __metadata("design:returntype", void 0)
], PrescriptionResolver.prototype, "createPrecsription", null);
__decorate([
    graphql_1.Query(() => [prescription_entity_1.Prescription], { name: 'getAllPrecsription' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PrescriptionResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => prescription_entity_1.Prescription, { name: 'getPrecsriptionByID' }),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PrescriptionResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => prescription_entity_1.Prescription),
    __param(0, graphql_1.Args('updatePrecsriptionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_prescription_input_1.UpdatePrescriptionInput]),
    __metadata("design:returntype", void 0)
], PrescriptionResolver.prototype, "updatePrecsription", null);
__decorate([
    graphql_1.Mutation(() => prescription_entity_1.Prescription),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PrescriptionResolver.prototype, "removePrecsription", null);
__decorate([
    graphql_1.ResolveField((of) => patient_entity_1.Patient),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [prescription_entity_1.Prescription]),
    __metadata("design:returntype", void 0)
], PrescriptionResolver.prototype, "patient", null);
__decorate([
    graphql_1.ResolveField((of) => [medicine_entity_1.Medicine]),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [prescription_entity_1.Prescription]),
    __metadata("design:returntype", void 0)
], PrescriptionResolver.prototype, "medicines", null);
PrescriptionResolver = __decorate([
    graphql_1.Resolver(() => prescription_entity_1.Prescription),
    __metadata("design:paramtypes", [prescription_service_1.PrescriptionService])
], PrescriptionResolver);
exports.PrescriptionResolver = PrescriptionResolver;
//# sourceMappingURL=prescription.resolver.js.map