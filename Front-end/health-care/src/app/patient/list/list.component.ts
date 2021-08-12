import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
private _idFilter:string =''
FilteredPatients:patient[]=[]
message: string = '';
substriber!: Subscription;
 

  set idFilter(value:string){
    console.log("setter fired" + value)
    this._idFilter=value;
    this.filterByid();

  }
  get idFilter(){
    return this._idFilter;

  }
  constructor(private patientservice:PatientService) { }



  filterByid() {
    this.FilteredPatients = this.patients.filter(patient => patient.id.includes(this._idFilter))
  }

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
      this.FilteredPatients=this.patients;
      console.log(this.patients);
    });
  }

  deletePatient(id:string){
    this.patientservice.deletePatient(id).subscribe((data)=>{
      console.log("deleted")
    })
  }



}
