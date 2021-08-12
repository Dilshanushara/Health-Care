import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { MedicineService } from 'src/app/medicine/medicine.service';
import { Medicine } from 'src/app/medicine/model/medicine.model';
import { patient } from 'src/app/patient/model/patient.model';
import { PatientService } from 'src/app/patient/patient.service';
import { AddedMedicine } from '../model/added_medicne.model';
import { Prescription } from '../model/prescription.model';
import { PrescriptionService } from '../prescription.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private medicineservice:MedicineService,private patientservice : PatientService,private prescriptionservice:PrescriptionService) { }

  AllMedicines:Medicine[]=[];
  patients:patient[]=[];
  AddedMedicineIDS:AddedMedicine[]=[];
  AddedMedicineNames:AddedMedicine[]=[];
  MedicineIDS:string[]=[];
  prescription_medicines:Medicine[]=[];
  GetMedicine:any;

  ngOnInit(): void {
    this.getMedicine();
    this.getPatientsIDS();
  }

  getMedicine(){
    this.medicineservice.getMedicine().subscribe((data)=>{
      this.AllMedicines=data.data.getAllmedicine;
      // console.log(this.medicines);
    })
  }

  getPatientsIDS(){
    this.patientservice.getPatients().subscribe((data)=>{
      this.patients=data.data.getAllPatients;
      console.log(this.patients);
    })
  }

  addMedicine(name:string){
    console.log("medicine name");
    console.log(name);
   
  }

  addPrescription(prescription:Prescription){
    console.log("pres comp")
    this.prescriptionservice.addPrescription(prescription).subscribe((data)=>{
      console .log("prescripton component triggerd")
    });

  }

  getPatientID(){
    console.log("patientid selected")
  }

  myFunc() {
    var id = ((document.getElementById("MedicineID") as HTMLInputElement).value);
     this.getMedicineByID(id);
    this.MedicineIDS.push(id);
    console.log(this.MedicineIDS);

    let newmedicine:AddedMedicine={

      Dosage :((document.getElementById("Dosage") as HTMLInputElement).value),
      id : ((document.getElementById("MedicineID") as HTMLInputElement).value),
    }
//  console.log(newmedicine);
 this.AddedMedicineIDS.push(newmedicine);
 console.log(this.AddedMedicineIDS)
 
    // var Name= ((document.getElementById("MedicineName") as HTMLInputElement).value);

    // console.log(Name);
}

  onSubmit(form :NgForm){
    if( form.valid){
    let newprescription: Prescription = {
      id:form.value.id,
      PatientID:form.value.PatientID,
      Subject:form.value.Subject,
      Comments :form.value.Comment,
      MedicineIDS:this.MedicineIDS,
    
      }
      this.addPrescription(newprescription);
  }
}

  Remove(id:string){
    let index = this.AddedMedicineIDS.findIndex(x=>x.id ==id);
    this.AddedMedicineIDS.splice(index,1);
    // let index2=this.MedicineIDS.findIndex(x=>);
    // this.MedicineIDS.splice(index,1)
  }

  getMedicineByID(id:string){
    this.medicineservice.getMedicineByID(id).subscribe((data)=>{
      this.GetMedicine=data.data.getMedicineByID;
      this.AddedMedicineNames=data.data.getMedicineByID;
      console.log(this.AddedMedicineNames)
      // console.log(data.data.getMedicineByID)
      // console.log("/////////////////");
      // console.log(this.GetMedicine)

    })

  }

}
