import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  id:string='';

  constructor(private prescriptionservice:PrescriptionService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id') as unknown as string;
    console.log(this.id)
    this.getPrescription(this.id);

  }
  getPrescription(id :string){
    this.prescriptionservice.getPrescriptionForPatient(id).subscribe((data)=>{
      console.log(data.data.getpatientbyID.prescription);
      this.prescriptions=data.data.getpatientbyID.prescription;
    })
}

}
