import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/medicine/medicine.service';
import { Medicine } from 'src/app/medicine/model/medicine.model';
import { patient } from 'src/app/patient/model/patient.model';
import { PatientService } from 'src/app/patient/patient.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private medicineservice:MedicineService,private patientservice : PatientService) { }

  medicines:Medicine[]=[];
  patients:patient[]=[];
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

}
