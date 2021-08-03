import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PatientModule } from './patient/patient.module';
import { PrescriptionModule } from './prescription/prescription.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    PatientModule,
    PrescriptionModule,
    RouterModule.forRoot([
      {path:'login', component :LoginComponent},
      {path:'',redirectTo:'login',pathMatch:"full"},
      {path:'home',component:HomeComponent}
      
  ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
