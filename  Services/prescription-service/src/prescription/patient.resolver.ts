
import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Patient } from "./entities/patient.entity";
import { Prescription } from "./entities/prescription.entity";
import { PrescriptionService } from "./prescription.service";

@Resolver((of)=>Patient)
export class PatientResolver{
    constructor(private readonly prescriptionservice:PrescriptionService){

    }


    @ResolveField((of)=>[Patient])
    prescription(@Parent() patient:Patient):Promise<Prescription[]>{
        return this.prescriptionservice.forPatient(patient.id)
    }
    


}