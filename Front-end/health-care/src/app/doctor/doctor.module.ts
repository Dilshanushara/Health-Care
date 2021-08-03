import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
