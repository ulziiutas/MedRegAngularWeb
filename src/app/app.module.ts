import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }          from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SignaturePadModule } from 'angular2-signaturepad';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { MedicalExamComponent } from './medical-exam/medical-exam.component';
import { MedicalTherapyComponent } from './medical-therapy/medical-therapy.component';
import { MedicationfeesComponent } from './medicationfees/medicationfees.component';
import { ConcludedfeeComponent } from './concludedfee/concludedfee.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';

import { NgbdModal } from './modal/modal';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { ModalAddComponent } from './modal-add/modal-add.component';
import { ModalDetailComponent } from './modal-detail/modal-detail.component';
import { MedicalTherapyDetailComponent } from './medical-therapy-detail/medical-therapy-detail.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },  
  { path: 'dashboard', component: DashboardComponent },  
  { path: 'patientlist', component: PatientlistComponent },
  { path: 'medicalExam', component: MedicalExamComponent },  
  { path: 'medicalTherapy', component: MedicalTherapyComponent },   
  { path: 'medicationfees', component: MedicationfeesComponent },  
  { path: 'concludedfee', component: ConcludedfeeComponent },  
  { path: 'userprofile', component: UserprofileComponent },  
  { path: 'usermanagement', component: UsermanagementComponent },  
  { path: 'home/:id', component: HomeComponent },  
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    DashboardComponent,
    PatientlistComponent,
    MedicalExamComponent,
    MedicalTherapyComponent,
    MedicationfeesComponent,
    ConcludedfeeComponent,
    UserprofileComponent,
    UsermanagementComponent,
    NgbdModal,
    ModalDeleteComponent,
    ModalEditComponent,
    ModalAddComponent,
    ModalDetailComponent,
    MedicalTherapyDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SignaturePadModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
      // <-- debugging purposes only
    )
  ],
  entryComponents: [
    ModalDeleteComponent,
    ModalEditComponent,
    ModalAddComponent,
    ModalDetailComponent,
    MedicalTherapyDetailComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
