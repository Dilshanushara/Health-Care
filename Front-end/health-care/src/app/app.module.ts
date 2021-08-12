import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import  {initializeKeycloak} from './auth/app.init';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PatientModule } from './patient/patient.module';
import { PrescriptionModule } from './prescription/prescription.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DoctorModule } from './doctor/doctor.module';
import{MedicineModule}from './medicine/medicine.module'
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AuthGuard } from './auth/keycloak.guard';

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
    DoctorModule,
    MedicineModule,
    FormsModule,
    KeycloakAngularModule,
    RouterModule.forRoot([
      {path:'login', component :LoginComponent},
      {path:'',redirectTo:'login',pathMatch:"full"},
      // {path:'home',component:HomeComponent,canActivate:[AuthGuard]}
      {path:'home',component:HomeComponent}
      
  ]),
    GraphQLModule,
    HttpClientModule
],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
