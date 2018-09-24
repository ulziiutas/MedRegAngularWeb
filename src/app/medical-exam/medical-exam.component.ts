import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConcludedfeeComponent } from '../concludedfee/concludedfee.component';

import { NgbdModal } from '../modal/modal';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { ModalAddComponent } from '../modal-add/modal-add.component';
import { ModalDetailComponent } from '../modal-detail/modal-detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-medical-exam',
  templateUrl: './medical-exam.component.html',
  styleUrls: ['./medical-exam.component.css']
})
export class MedicalExamComponent implements OnInit {

  patients = [    
    {
      id: 1,
      date : "",
      time : "",
      registrationNum : "",
      medicalInsuranceNum : "",
      firstname: "Leanne",
      lastname: "Graham",
      age: "",
      gender : "",
      hadSurgery : "",
      jobPosition : "",
      jobMajor : "",
      addressdistrict : "",
      addresscity : "",
      addressdesc : "",
      phone : "",
      allergy : "",
      symptoms : "",
      medicalHistory : "",
      realExamination : "",
      diseaseType : "",
      pulse : "",
      concludedExamResult : "",
      examedDoctor : "",
      therapyShownOnPicture : "",
      therapySteps : "",
      therapyType : "",
      therapyMedicines : [
        {
          name : "Царгис",
          quantity : "",
        },
        {
          name : "Шавар",
          quantity : "",
        },
        {
          name : "Тос",
          quantity : "",
        },
        {
          name : "DDS",
          quantity : "",
        }
      ],
      therapyWarnings : "",
      therapyApprovedName : "",
      therapyDoctor : "",
      category: 'Өвчтөн'
    }
  ];
  pageCount: number = 0;
  chosenPage: number = 0;
  pageNumbers: any[] = [];
  patientsFilter: any[] = [];
  borderBottom = {'border-bottom' : 'thin solid lightgrey'};
  bodyText: string; 
  firstnameFilter: string = "";
  lastnameFilter: string = "";
  usernameFilter: string = "";
  emailFilter: string = "";
  constructor(
    public viewRef: ViewContainerRef,
    private modalService: NgbModal
  ) { 
    // this.patientsFilter = this.patients;
    this.paging(this.patients);
    this.bodyText = 'This text can be updated in modal 1';
  }

  ngOnInit() {
  }
  paging(patients: any) {
    this.pageCount = Math.ceil(patients.length / 10);
    this.pageNumbers = [];
    this.patientsFilter = [];
    console.log(this.pageCount);
    for(let i = 0; i < this.pageCount; i++) {
      this.pageNumbers.push(i + 1);
    }
    for (let i = 0; i < this.pageCount; i++) {
      let tmp = {
        page: i,
        patients: []
      }
      for(let j = i * 10; j < i * 10 + 10; j++) {
        if(j < patients.length) {
          tmp.patients.push(patients[j]);
        }
      }
      this.patientsFilter.push(tmp);
    }
    console.log(this.pageNumbers);
  }
  choosePage(number : number) {
    this.chosenPage = number - 1;
  }
  openModalDelete(user : any) {
    const modalRef = this.modalService.open(ModalDeleteComponent);
    modalRef.componentInstance.data = user; // should be the user
    modalRef.componentInstance.page = 'usermanagement'; // should be the page

    modalRef.result.then((result) => {
      if(result == "close") {

      } else if (result != null) {
        if(result.email != "" && result.email != undefined && result.email != null) {

          
          for(let i = 0; i < this.patients.length; i++) {            
            if(this.patients[i].id == result.id) {
              this.patients.splice(i,1);
            }            
          }
          this.paging(this.patients);
        }
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  openModalEdit(user : any) {
    const modalRef = this.modalService.open(ModalEditComponent);
    modalRef.componentInstance.data = user; // should be the user
    modalRef.componentInstance.page = 'usermanagement'; // should be the page

    modalRef.result.then((result) => {
      if(result == "close") {

      } else if (result != null) {
        if(result.email != "" && result.email != undefined && result.email != null) {
          for(let i = 0; i < this.patientsFilter.length; i++) {
            for(let j = 0; j < this.patientsFilter[i].patients.length; j++) {
              if(this.patientsFilter[i].patients[j].id == result.id) {
                this.patientsFilter[i].patients[j].firstname = result.firstname;
                this.patientsFilter[i].patients[j].lastname = result.lastname;
              }
            }
          }
          for(let i = 0; i < this.patients.length; i++) {            
            if(this.patients[i].id == result.id) {
              this.patients[i].firstname = result.firstname;
              this.patients[i].lastname = result.lastname;
            }            
          }
        }
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  openModalAdd() {
    const modalRef = this.modalService.open(ModalAddComponent);
    modalRef.componentInstance.page = 'usermanagement'; // should be the page

    modalRef.result.then((result) => {
      if(result == "close") {

      } else if (result != null) {
        if(result.email != "" && result.email != undefined && result.email != null) {
          if(this.patientsFilter[this.patientsFilter.length-1].patients.length == 10) {
            let tmp = {
              page: this.patientsFilter.length,
              patients: []
            }
            tmp.patients.push(result)
            this.pageCount ++;
            this.pageNumbers.push(this.pageCount);
            this.patientsFilter.push(tmp);
          } else {
            this.patientsFilter[this.patientsFilter.length-1].patients.push(result);
          }
          this.patients.push(result);
          this.chosenPage = this.patientsFilter.length - 1;
        }
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  firstnameFilterChange(event){
    if(event != "") {
      let tmppatients = this.patients.filter(user => (user.firstname.toLowerCase().indexOf(event.toLowerCase()) >= 0));
      this.paging(tmppatients);
    } else {
      this.paging(this.patients);
    }
  }
  lastnameFilterChange(event){
    if(event != "") {
      let tmppatients = this.patients.filter(user => (user.lastname.toLowerCase().indexOf(event.toLowerCase()) >= 0));  
      this.paging(tmppatients);
    } else {
      this.paging(this.patients);    
    }  
  }
  registrationNumFilterChange(event){
    if(event != "") {
      let tmppatients = this.patients.filter(user => (user.registrationNum.toLowerCase().indexOf(event.toLowerCase()) >= 0));   
      this.paging(tmppatients); 
    } else {
      this.paging(this.patients);   
    } 
  }
  phoneNumFilterChange(event){
    if(event != "") {
      let tmppatients = this.patients.filter(user => (user.phone.toLowerCase().indexOf(event.toLowerCase()) >= 0));
      this.paging(tmppatients); 
    } else {
      this.paging(this.patients);     
    }
  }
  openPatientsDetail(patient) {
    const modalRef = this.modalService.open(ModalDetailComponent,{windowClass:"hugeModal"});
    modalRef.componentInstance.page = 'medicalexam'; // should be the page
    modalRef.componentInstance.patient = patient; // should be the page

    modalRef.result.then((result) => {
      if(result == "close") {

      } else if (result != null) {
        if(result.email != "" && result.email != undefined && result.email != null) {
          
          for(let i = 0; i < this.patientsFilter.length; i++) {
            for(let j = 0; j < this.patientsFilter[i].patients.length; j++) {
              if(this.patientsFilter[i].patients[j].id == result.id) {
                this.patientsFilter[i].patients[j].firstname = result.firstname;
                this.patientsFilter[i].patients[j].lastname = result.lastname;
                this.patientsFilter[i].patients[j].gender = result.gender;
                this.patientsFilter[i].patients[j].phone = result.phone;
              }
            }
          }
          for(let i = 0; i < this.patients.length; i++) {            
            if(this.patients[i].id == result.id) {
              this.patients[i].firstname = result.firstname;
              this.patients[i].lastname = result.lastname;
              this.patients[i].gender = result.gender;
              this.patients[i].phone = result.phone;
            }            
          }
        }
      }
    }).catch((error) => {
      console.log(error);
    });
  }
}
