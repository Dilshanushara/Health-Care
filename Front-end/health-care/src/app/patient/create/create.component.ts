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
      console.log(form.value.Gender);
      if( form.valid){
        let newpatient: patient = {
          id:form.value.id,
          FirstName:form.value.FirstName,
          LastName:form.value.LastName,
          DOB:form.value.DOB,
          Address:form.value.Address,
          FatherName:form.value.FatherName,
          ContactNumber:form.value.ContactNumber,
          Gender:form.value.Gender
      
          }
          this.addPatient(newpatient);
          this.router.navigateByUrl('patientlist')
        //more code here
      }
  }

  ngOnInit(): void {
 
    }

    addPatient(values:patient) {
      this.patientservice.addPatient(values).subscribe((data) => {

      });
    }

    goPrev()
    {
      window.history.back();
    }


}
