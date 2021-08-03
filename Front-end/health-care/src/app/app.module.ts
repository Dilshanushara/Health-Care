import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PatientModule } from './patient/patient.module';
import { PrescriptionModule } from './prescription/prescription.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    RouterModule.forRoot([
      {path:'login', component :LoginComponent},
      {path:'',redirectTo:'login',pathMatch:"full"},
      {path:'home',component:HomeComponent}
      
  ]),
    GraphQLModule,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
