import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { patient } from './model/patient.model';


const GET_PATIENTS = gql`
query getAllPatients{
  getAllPatients{
    id
    FirstName
    LastName
    DOB
    Address
    Gender
  }
  }
`;

const ADD_PATIENT = gql`
mutation createPatient($input:CreatePatientInput!){
  createPatient(CreatePatientInput: $input){
  FirstName
  LastName
  Address
  FatherName
  DOB
  ContactNumber
  Gender
  
}
}
`;

const UPDATE_PATIENT=gql`
mutation updatePatient($input:UpdatePatientinput!){
  updatePatient(UpdatePatientInput: $input){
  id
  FirstName
  LastName
  Address
  DOB
  FatherName
  
}
}
`;

const DELETE_PATIENT=gql`
mutation
  deletePatient($id:String!){
    deletePatient(id:$id){
      id
    
    }
  }
  `;

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  constructor(private apollo: Apollo) { }

  getPatients():Observable<any>{
    return this.apollo.watchQuery<any>({
      query:GET_PATIENTS,
    }).valueChanges;
  }


  addPatient( patient:patient): Observable<any> {
    console.log("hello from service")
    console.log(patient)
    return this.apollo.mutate({
      mutation: ADD_PATIENT,
      variables: {
        "input":{
        "FirstName":patient.FirstName,
        "LastName":patient.LastName,
        "DOB":patient.DOB,
        "Address":patient.Address,
        "FatherName":patient.FatherName,
        "ContactNumber":patient.ContactNumber,
        "Gender":patient.Gender
        },
      },
      
    });
    
  }

  updatePatient( patient:patient):Observable<any> {
    return this.apollo.mutate({
      mutation: ADD_PATIENT,
      variables: {
        "input":{
        "id":patient.id,
        "FirstName":patient.FirstName,
        "LastName":patient.LastName,
        "DOB":patient.DOB,
        "Address":patient.Address,
        "FatherName":patient.FatherName
        },
      },
      
    });

  }
  deletePatient(id:string):Observable<any> {
    console.log("delete triggerd")
    return this.apollo.mutate({
      mutation: DELETE_PATIENT,
      variables: {
        "id":id
        },
      },
      
    );

  }


}
