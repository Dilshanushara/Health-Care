"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorModule = void 0;
const common_1 = require("@nestjs/common");
const doctor_service_1 = require("./doctor.service");
const doctor_resolver_1 = require("./doctor.resolver");
const doctor_entity_1 = require("./entities/doctor.entity");
const typeorm_1 = require("@nestjs/typeorm");
let DoctorModule = class DoctorModule {
};
DoctorModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([doctor_entity_1.Doctor])],
        providers: [doctor_resolver_1.DoctorResolver, doctor_service_1.DoctorService]
    })
], DoctorModule);
exports.DoctorModule = DoctorModule;
//# sourceMappingURL=doctor.module.js.map