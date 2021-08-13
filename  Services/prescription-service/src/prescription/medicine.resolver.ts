
import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Medicine } from "./entities/medicine.entity";
import { Patient } from "./entities/patient.entity";
import { Prescription } from "./entities/prescription.entity";
import { PrescriptionService } from "./prescription.service";

// @Resolver((of)=>Medicine)
export class MedicineResolver{
    // constructor(private readonly prescriptionservice:PrescriptionService){

    // }


    // @ResolveField((of)=>[Medicine])
    // prescription(@Parent() medicine:Medicine):Promise<Prescription[]>{
    //     return this.prescriptionservice.forMedicine(medicine.id)
    // }
    


}