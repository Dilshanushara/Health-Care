import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

const GET_PRESCRIPTION_BY_PATIENTID=gql`
query
Patient($id:String!){
  getpatientbyID(id:$id){
    id
    FirstName
    LastName
    prescription{
      id
      Subject
      Comments
      medicines{
        Name
        Type
      }
      
    }
    
  }
    
  }
  `

  const GET_PRESCRIPTION_BY_ID=gql`
  query 
  Prescription($id:String!){
    getPrecsriptionByID(id:$id){
      PatientID
      Subject
      Comments
      medicines{
        id
        Name
      }
      patient{
        id
        FirstName
      }
    }
  }
  `




@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private apollo:Apollo) { }

  addPrescription(prescription:Prescription):Observable<any>{
    console.log("Hello from prescription service")
    return this.apollo.mutate({
      mutation:ADD_PRESCRIPTION,
      variables:{
         "input":{
        "PatientID": prescription.PatientID,
         "Subject": prescription.Subject,
         "Comments": prescription.Comments,
         "MedicineID": prescription.MedicineIDS
               }
       }
      })
  }

  getPrescriptionForPatient(id :string):Observable<any>{
    return this.apollo.watchQuery<any>({
      query: GET_PRESCRIPTION_BY_PATIENTID,
      variables: {
        id: id
      }
    }).valueChanges;
  }

  getPrescriptionByID(id :string):Observable<any>{
    return this.apollo.watchQuery<any>({
      query:GET_PRESCRIPTION_BY_ID,
      variables:{
        id:id
      }
    }).valueChanges;
  }

}


