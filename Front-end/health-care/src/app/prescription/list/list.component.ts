import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Prescription } from '../model/prescription.model';
import { PrescriptionService } from '../prescription.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private prescriptionservice:PrescriptionService) { }

  ngOnInit(): void {
  }

  AddPrescription(prescription:Prescription){
    console.log("pres comp")
    this.prescriptionservice.addPrescription(prescription).subscribe((data)=>{
      console .log("prescripton component triggerd")
    });
  }
  onSubmit(form :NgForm){
    let newprescription: Prescription = {
      id:form.value.id,
      PatientID:form.value.PatientID,
      Subject:form.value.Subject,
      Comment :form.value.Comment,
      MedicineIDS:form.value.MedicineIDS

      }
      this.AddPrescription(newprescription);
  }

}
