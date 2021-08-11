import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicine } from 'src/app/medicine/model/medicine.model';
import { patient } from 'src/app/patient/model/patient.model';
import { Prescription } from '../model/prescription.model';
import { PrescriptionService } from '../prescription.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  patient:any;
  patientobj:any;
  medicines:Medicine[]=[];
  prescription:any;
  id:string='';
  constructor(private prescriptionservice :PrescriptionService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id') as unknown as string;
    console.log(this.id)
    this.getPrescriptionByID(this.id)
  }


  getPrescriptionByID(id:string){
    this.prescriptionservice.getPrescriptionByID(id).subscribe((data)=>{
      
      this.medicines=data.data.getPrecsriptionByID.medicines;
      console.log(this.medicines)
      this.prescription=data.data.getPrecsriptionByID.prescription
      console.log(this.prescription)
      this.patient=data.data.getPrecsriptionByID.patient;
      console.log(data.data);
    })

  }


}
