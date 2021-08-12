import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Medicine } from './model/medicine.model';

const GET_MEDICINES =gql`
query{
  getAllmedicine{
    id
    Name
    Type
    Dosage
  }
    }
    
`;  

const ADD_MEDICINE =gql`
mutation createMedicine($input:CreateMedicineInput!){
  createMedicine(createMedicineInput: $input){
	Dosage
  Name
    Type
  
}
}
`
;

const GET_MEDICINE_BY_ID=gql`
query 
Medicine($id:String!){
  getMedicineByID(id:$id){
    Name
    Type
    Dosage
  }
}


`
;
@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private apollo:Apollo) { }


getMedicine():Observable<any>{
  return this.apollo.watchQuery<any>({
    query:GET_MEDICINES,
  }).valueChanges;
}

AddMedicine(medicine:Medicine):Observable<any>{
  return this.apollo.mutate({
    mutation:ADD_MEDICINE,
    variables:{
      "input":{
      "Dosage": medicine.Dosage,
      "Name": medicine.Name,
      "Type": medicine.Type
    }
  }
  })

}

getMedicineByID(id :string):Observable<any>{
  return this.apollo.watchQuery({
    query:GET_MEDICINE_BY_ID,
    variables:{
      id:id
    }
  }).valueChanges;
}




}
