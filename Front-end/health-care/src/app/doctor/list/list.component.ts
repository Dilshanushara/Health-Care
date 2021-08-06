import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { doctor } from '../model/doctor.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  doctors:doctor[]=[];
  constructor(private doctorservice:DoctorService) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  Delete(id:string){
    console.log("delete function")
    this.deleteDoctor(id);
  }

  getDoctors(){
    this.doctorservice.getDoctors().subscribe((data)=>{
      this.doctors=data.data.getAlldoctors;
      console.log(this.doctors);
    });
  }

  deleteDoctor(id:string){
    this.doctorservice.deleteDoctor(id).subscribe((data)=>{
      console.log("deleted")
    })
  }

}
