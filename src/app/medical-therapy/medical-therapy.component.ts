import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConcludedfeeComponent } from '../concludedfee/concludedfee.component';

import { NgbdModal } from '../modal/modal';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { ModalAddComponent } from '../modal-add/modal-add.component';
import { MedicalTherapyDetailComponent } from '../medical-therapy-detail/medical-therapy-detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-medical-therapy',
  templateUrl: './medical-therapy.component.html',
  styleUrls: ['./medical-therapy.component.css']
})
export class MedicalTherapyComponent implements OnInit {

  patients = [    
    {
      id: 1,
      firstname: "Leanne",
      lastname: "Graham",
      registrationNum : "",
      medicalInsuranceNum : ""
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
    this.paging(this.patients);
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
  openPatientsDetail(patient) {
    const modalRef = this.modalService.open(MedicalTherapyDetailComponent,{windowClass:"hugeModal"});
    modalRef.componentInstance.page = 'medicalexam'; // should be the page
    modalRef.componentInstance.therapy = patient; // should be the page

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
}
