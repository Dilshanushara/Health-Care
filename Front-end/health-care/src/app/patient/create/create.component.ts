import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import {Observable} from 'rxjs';
import{map} from 'rxjs/operators'
import { patient } from '../model/patient.model';
import { PatientService } from '../patient.service';




@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  

 
  constructor(private patientservice:PatientService, private router:Router) { 
    
  }

    onSubmit(form :NgForm){
    let newpatient: patient = {
    id:form.value.id,
    FirstName:form.value.FirstName,
    LastName:form.value.LastName,
    DOB:form.value.DOB,
    Address:form.value.Address,
    FatherName:form.value.FatherName

    }
    this.addPatient(newpatient);
    this.router.navigateByUrl('patientlist')

  }

  // mypatient:patient={
  //   id:"111222",
  //   FirstName:"ABC",
  //   LastName:"123",
  //   DOB:"grgr",
  //   Address:"grgrg",
  //   FatherName:"vddgd"
  // }

  ngOnInit(): void {
    // this.addPatient(this.mypatient);
    // console.log("helloo from component1")
    }

    addPatient(values:patient) {
      // console.log("helloo from component2")
      this.patientservice.addPatient(values).subscribe((data) => {
        // console.log("helloo from component3")
        // console.log(data.data.createPatient);
      });
    }




    // create(FirstName:string,LastName:string,Address:string,DOB:string,FatherName:string,Gender:string){
    //   console.log(FirstName,LastName,DOB,FatherName,Gender,Number)
    // }
}
