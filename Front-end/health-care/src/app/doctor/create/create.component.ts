import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { doctor } from '../model/doctor.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private doctorservice:DoctorService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form :NgForm){
    let newdoctor: doctor = {
    RegID:form.value.id,
    FirstName:form.value.FirstName,
    LastName:form.value.LastName,
    DOB:form.value.DOB,
    Address:form.value.Address,
    Gender:form.value.Gender,
    ContactNumber:form.value.contact

    }
    this.addDoctor(newdoctor);
    this.router.navigateByUrl('doctorlist')

  }

  addDoctor(values:doctor) {
    // console.log("helloo from component2")
    this.doctorservice.addDoctor(values).subscribe((data) => {
      // console.log("helloo from component3")
      // console.log(data.data.createPatient);
    });
  }

   cancel(){
      window.history.back();
  }


}
