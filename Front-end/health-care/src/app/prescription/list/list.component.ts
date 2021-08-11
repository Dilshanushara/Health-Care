import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { patient } from 'src/app/patient/model/patient.model';
import { Prescription } from '../model/prescription.model';
import { PrescriptionService } from '../prescription.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
 
  prescriptions:Prescription[]=[];

  constructor(private prescriptionservice:PrescriptionService) { }

  ngOnInit(): void {
    this.getPrescription("8f918cff-1df8-466a-9ab7-7bdea1d02687");

  }

  getPrescription(id :string){
    this.prescriptionservice.getPrescriptionForPatient(id).subscribe((data)=>{
      console.log(data.data.getpatientbyID.prescription);
      this.prescriptions=data.data.getpatientbyID.prescription;
    })
}

}
