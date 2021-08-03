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
exports.DoctorResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const doctor_service_1 = require("./doctor.service");
const doctor_entity_1 = require("./entities/doctor.entity");
const create_doctor_input_1 = require("./dto/create-doctor.input");
const update_doctor_input_1 = require("./dto/update-doctor.input");
let DoctorResolver = class DoctorResolver {
    constructor(doctorService) {
        this.doctorService = doctorService;
    }
    createDoctor(createDoctorInput) {
        return this.doctorService.create(createDoctorInput);
    }
    findAll() {
        return this.doctorService.findAll();
    }
    findOne(id) {
        return this.doctorService.findOne(id);
    }
    updateDoctor(updateDoctorInput) {
        return this.doctorService.update(updateDoctorInput.RegID, updateDoctorInput);
    }
    removeDoctor(id) {
        return this.doctorService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => doctor_entity_1.Doctor),
    __param(0, graphql_1.Args('createDoctorInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_doctor_input_1.CreateDoctorInput]),
    __metadata("design:returntype", void 0)
], DoctorResolver.prototype, "createDoctor", null);
__decorate([
    graphql_1.Query(() => [doctor_entity_1.Doctor], { name: 'getAlldoctors' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DoctorResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => doctor_entity_1.Doctor, { name: 'finddoctorbyID' }),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DoctorResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => doctor_entity_1.Doctor),
    __param(0, graphql_1.Args('updateDoctorInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_doctor_input_1.UpdateDoctorInput]),
    __metadata("design:returntype", void 0)
], DoctorResolver.prototype, "updateDoctor", null);
__decorate([
    graphql_1.Mutation(() => doctor_entity_1.Doctor),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DoctorResolver.prototype, "removeDoctor", null);
DoctorResolver = __decorate([
    graphql_1.Resolver(() => doctor_entity_1.Doctor),
    __metadata("design:paramtypes", [doctor_service_1.DoctorService])
], DoctorResolver);
exports.DoctorResolver = DoctorResolver;
//# sourceMappingURL=doctor.resolver.js.map