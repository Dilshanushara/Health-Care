import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../model/medicine.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  medicines:Medicine[]=[];

  constructor(private medicineservice:MedicineService,private router:Router) { }

  ngOnInit(): void {
   
  }

  onSubmit(form:NgForm){
    let medicine:Medicine={
      id:form.value.id,
      Name:form.value.Name,
      Type:form.value.Type,
      Dosage:form.value.Dosage
    }
    this.AddMedicine(medicine);
    this.router.navigateByUrl('medicinelist')
  }

  AddMedicine(medicine:Medicine){
    this.medicineservice.AddMedicine(medicine).subscribe((data) => {
  
    });
  }



}
