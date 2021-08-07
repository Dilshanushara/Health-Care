import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicineRoutingModule } from './medicine-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, NgForm } from '@angular/forms';


@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    MedicineRoutingModule,
    FormsModule
  ]
})
export class MedicineModule { }
