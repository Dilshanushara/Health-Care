import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Prescription } from './model/prescription.model';

const ADD_PRESCRIPTION = gql`
mutation createPrescription($input:CreatePrescriptionInput!){
  createPrecsription(createPrecsriptionInput: $input){
	PatientID
    Subject
    Comments
    MedicineID
  
}
}
`
;



@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private apollo:Apollo) { }

  addPrescription(prescription:Prescription){
    console.log("Hello from prescription service")
    return this.apollo.mutate({
      mutation:ADD_PRESCRIPTION,
      variables:{
         "input":{
        "PatientID": prescription.PatientID,
         "Subject": prescription.Subject,
         "Comments": prescription.Comment,
         "MedicineID": prescription.MedicineIDS
               }
       }
      })
  }
}
