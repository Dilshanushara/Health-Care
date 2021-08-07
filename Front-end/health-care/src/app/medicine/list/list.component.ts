import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../model/medicine.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private medicineservice:MedicineService) { }

  medicines:Medicine[]=[];
  ngOnInit(): void {
    this.getMedicine();
  }

    getMedicine(){
    this.medicineservice.getMedicine().subscribe((data)=>{
      this.medicines=data.data. getAllmedicine;
      console.log(this.medicines);
    })
  }

}
