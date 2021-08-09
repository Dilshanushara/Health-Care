import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { MedicineService } from 'src/app/medicine/medicine.service';
import { Medicine } from 'src/app/medicine/model/medicine.model';
import { patient } from 'src/app/patient/model/patient.model';
import { PatientService } from 'src/app/patient/patient.service';
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
    this.prescriptionservice.addPrescription(prescription).subscribe((data)=>{
      console .log("prescripton component triggerd")
    });

  }

  onSubmit(form :NgForm){
    let newprescription: Prescription = {
      id:form.value.id,
      PatientID:form.value.PatientID,
      Subject:form.value.subject,
      Comment :form.value.comment,
      MedicineIDS:form.value.medicineIDS

      }
      this.AddPrescription(newprescription);
  }

}
