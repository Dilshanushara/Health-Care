"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrescriptionModule = void 0;
const common_1 = require("@nestjs/common");
const prescription_service_1 = require("./prescription.service");
const prescription_resolver_1 = require("./prescription.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const prescription_entity_1 = require("./entities/prescription.entity");
const patient_resolver_1 = require("./patient.resolver");
let PrescriptionModule = class PrescriptionModule {
};
PrescriptionModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([prescription_entity_1.Prescription])],
        providers: [prescription_resolver_1.PrescriptionResolver, prescription_service_1.PrescriptionService, patient_resolver_1.PatientResolver]
    })
], PrescriptionModule);
exports.PrescriptionModule = PrescriptionModule;
//# sourceMappingURL=prescription.module.js.map