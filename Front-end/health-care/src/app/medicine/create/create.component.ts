import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  medicines:[]=[];

  constructor(private medicineservice:MedicineService) { }

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
