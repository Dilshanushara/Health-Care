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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let Doctor = class Doctor {
};
__decorate([
    graphql_1.Field(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Doctor.prototype, "RegID", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Doctor.prototype, "FirstName", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Doctor.prototype, "LastName", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Doctor.prototype, "DOB", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Doctor.prototype, "Gender", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Doctor.prototype, "Address", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Doctor.prototype, "ContactNumber", void 0);
__decorate([
    graphql_1.Field(() => [String]),
    typeorm_1.Column("text", { array: true }),
    __metadata("design:type", Array)
], Doctor.prototype, "Number", void 0);
Doctor = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Entity()
], Doctor);
exports.Doctor = Doctor;
//# sourceMappingURL=doctor.entity.js.map