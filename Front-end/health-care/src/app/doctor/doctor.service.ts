import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { doctor } from './model/doctor.model';


const ADD_DOCTOR=gql`
mutation createDoctor($input:CreateDoctorInput!){
  createDoctor(createDoctorInput: $input){
  RegID
  FirstName
  LastName
  Address
  DOB
  Gender
  ContactNumber
  
}
}
`;
const GET_DOCTORS=gql`
query{
  getAlldoctors{
  RegID
  FirstName
  LastName
  DOB
  Gender
  ContactNumber
  Address
   
  }
}
`;



@Injectable({
  providedIn: 'root'
})

export class DoctorService {




  constructor(private apollo:Apollo) { }

  getDoctors():Observable<any>{
    return this.apollo.watchQuery<any>({
      query:GET_DOCTORS,
    }).valueChanges;
  }


  addDoctor( doctor:doctor): Observable<any> {
    console.log("hello from service")
    console.log(doctor)
    return this.apollo.mutate({
      mutation: ADD_DOCTOR,
      variables: {
        "input":{
        "RegistrationID":doctor.RegistrationID,
        "FirstName":doctor.FirstName,
        "LastName":doctor.LastName,
        "DOB":doctor.DOB,
        "Address":doctor.Address,
        "Gender":doctor.Gender,
        "ContactNumber":doctor.ContactNumber
        },
      },
      
    });
    
  }

  // updatePatient( patient:patient):Observable<any> {
  //   return this.apollo.mutate({
  //     mutation: ADD_PATIENT,
  //     variables: {
  //       "input":{
  //       "id":patient.id,
  //       "FirstName":patient.FirstName,
  //       "LastName":patient.LastName,
  //       "DOB":patient.DOB,
  //       "Address":patient.Address,
  //       "FatherName":patient.FatherName
  //       },
  //     },
      
  //   });
  // }


}
