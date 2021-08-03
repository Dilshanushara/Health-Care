import { Component, OnInit } from '@angular/core';
import { patient } from '../model/patient.model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

 // patients=[];
 patients:patient[]=[];
  constructor(private patientservice:PatientService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  Delete(id:string){
    console.log("delete function")
    this.deletePatient(id);
  }

  getPatients(){
    this.patientservice.getPatients().subscribe((data)=>{
      this.patients=data.data.getAllPatients;
      console.log(this.patients);
    });
  }

  deletePatient(id:string){
    this.patientservice.deletePatient(id).subscribe((data)=>{
      console.log("deleted")
    })
  }



}
