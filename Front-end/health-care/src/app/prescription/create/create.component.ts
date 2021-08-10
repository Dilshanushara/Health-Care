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

  medicines:Medicine[]=[];
  patients:patient[]=[];
  AddedMedicine:AddedMedicine[]=[];
  MedicineIDS:string[]=[];
  prescription_medicines:Medicine[]=[];
  ngOnInit(): void {
    this.getMedicine();
    this.getPatients();
  }

  getMedicine(){
    this.medicineservice.getMedicine().subscribe((data)=>{
      this.medicines=data.data.getAllmedicine;
      console.log(this.medicines);
    })
  }

  getPatients(){
    this.patientservice.getPatients().subscribe((data)=>{
      this.patients=data.data.getAllPatients;
      console.log(this.patients);
    })
  }

  AddMedicine(name:string){
    console.log("medicine name");
    console.log(name);
   
  }

  AddPrescription(prescription:Prescription){
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
    this.MedicineIDS.push(id);
    console.log(this.MedicineIDS);

    let newmedicine:AddedMedicine={

      Dosage :((document.getElementById("Dosage") as HTMLInputElement).value),
      id : ((document.getElementById("MedicineID") as HTMLInputElement).value),
      Comment : ((document.getElementById("Comments") as HTMLInputElement).value)
    }
//  console.log(newmedicine);
 this.AddedMedicine.push(newmedicine);
 
 console.log(this.AddedMedicine)
 
    // var Name= ((document.getElementById("MedicineName") as HTMLInputElement).value);

    // console.log(Name);
}

  onSubmit(form :NgForm){
    if( form.valid){
    let newprescription: Prescription = {
      id:form.value.id,
      PatientID:form.value.PatientID,
      Subject:form.value.Subject,
      Comment :form.value.Comment,
      MedicineIDS:this.MedicineIDS,
    
      }
      this.AddPrescription(newprescription);
  }
}


  Remove(id:string){
    let index = this.AddedMedicine.findIndex(x=>x.id ==id);
    this.AddedMedicine.splice(index,1);
    // let index2=this.MedicineIDS.findIndex(x=>);
    // this.MedicineIDS.splice(index,1)
  }

}
