import { Mutation, Resolver,Query, Args, ResolveReference } from '@nestjs/graphql';
import { CreatePatientInput } from './dto/create-patient.input';
import { UpdatePatientinput } from './dto/update-patient.input';
import { Patient } from './entity/patient.entity';
import { PatientService } from './patient.service';

@Resolver(()=>Patient)
export class PatientResolver {

    constructor(private PatientService:PatientService){

    }

    @Query(()=> [Patient], {name :'getAllPatients'})
    findAll(){
        return this.PatientService.FindAll();
    }

    @Mutation(()=>Patient)
    createPatient(@Args("CreatePatientInput") createpatientdto:CreatePatientInput){
        return this.PatientService.Create(createpatientdto);
    }

    @Query(()=>Patient,{name :'getpatientbyID'})
    findOne(@Args('id')id:string){
        return this.PatientService.FindOne(id);

    }
    @Mutation(()=>Patient,{name:"updatePatient"})
    update(@Args("UpdatePatientInput") updatepatientdto:UpdatePatientinput ){
        return this.PatientService.Update(updatepatientdto.id,updatepatientdto);

    }
    @Mutation(()=>Patient,{name :"deletePatient"})
    remove(@Args('id')id:string){
       return this.PatientService.Delete(id);
    }

    @ResolveReference ()
    resolvereference(ref: {__typename:string,id:string}){
        return this.PatientService.FindOne(ref.id);
    }

}
