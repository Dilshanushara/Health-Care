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
exports.CreatePatientInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreatePatientInput = class CreatePatientInput {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreatePatientInput.prototype, "FirstName", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreatePatientInput.prototype, "LastName", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreatePatientInput.prototype, "DOB", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreatePatientInput.prototype, "Gender", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreatePatientInput.prototype, "Address", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreatePatientInput.prototype, "FatherName", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreatePatientInput.prototype, "ContactNumber", void 0);
CreatePatientInput = __decorate([
    graphql_1.InputType()
], CreatePatientInput);
exports.CreatePatientInput = CreatePatientInput;
//# sourceMappingURL=create-patient.input.js.map