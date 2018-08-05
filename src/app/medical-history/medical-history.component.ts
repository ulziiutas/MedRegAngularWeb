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
selector: 'app-medical-history',
templateUrl: './medical-history.component.html',
styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {

  patients = [
    {
      id: 1,
      firstname: "Leanne",
      lastname: "Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      password: "Sincere@april.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Өвчтөн'
    },
    {
      id: 2,
      firstname: "Ervin",
      lastname: "Howell",
      username: "Antonette",
      email: "Shanna@melissa.tvsdfsd",
      password: "Shanna@melissa.tvsdfsd",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "M",
      birthday: "",
      category: 'Өвчтөн'
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Өвчтөн'
    },    
    {
      id: 4,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Өвчтөн'
    },    
    {
      id: 5,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Өвчтөн'
    },    
    {
      id: 6,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Өвчтөн'
    },    
    {
      id: 7,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },    
    {
      id: 8,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },    
    {
      id: 9,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },    
    {
      id: 10,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },    
    {
      id: 11,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },    
    {
      id: 12,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },    
    {
      id: 13,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },    
    {
      id: 14,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },    
    {
      id: 15,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },

    {
      id: 16,
      firstname: "Leanne",
      lastname: "Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      password: "Sincere@april.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },
    {
      id: 17,
      firstname: "Ervin",
      lastname: "Howell",
      username: "Antonette",
      email: "Shanna@melissa.tvsdfsd",
      password: "Shanna@melissa.tvsdfsd",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },    
    {
      id: 18,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },    
    {
      id: 19,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },    
    {
      id: 20,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },    
    {
      id: 21,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },    
    {
      id: 22,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },    
    {
      id: 23,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },    
    {
      id:24,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },    
    {
      id: 25,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },    
    {
      id: 26,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },    
    {
      id: 27,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },    
    {
      id: 28,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },    
    {
      id: 29,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
    },    
    {
      id: 30,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      addresscity: "",
      addressdistrict: "",
      addresshoroo: "",
      addressdesc: "",
      phone: "",
      gender: "F",
      birthday: "",
      category: 'Админ'
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
                this.patientsFilter[i].patients[j].email = result.email;
                this.patientsFilter[i].patients[j].firstname = result.firstname;
                this.patientsFilter[i].patients[j].lastname = result.lastname;
                this.patientsFilter[i].patients[j].username = result.username;
                this.patientsFilter[i].patients[j].password = result.password;
              }
            }
          }
          for(let i = 0; i < this.patients.length; i++) {            
            if(this.patients[i].id == result.id) {
              this.patients[i].email = result.email;
              this.patients[i].firstname = result.firstname;
              this.patients[i].lastname = result.lastname;
              this.patients[i].username = result.username;
              this.patients[i].password = result.password;
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
  usernameFilterChange(event){
    if(event != "") {
      let tmppatients = this.patients.filter(user => (user.username.toLowerCase().indexOf(event.toLowerCase()) >= 0));   
      this.paging(tmppatients); 
    } else {
      this.paging(this.patients);   
    } 
  }
  emailFilterChange(event){
    if(event != "") {
      let tmppatients = this.patients.filter(user => (user.email.toLowerCase().indexOf(event.toLowerCase()) >= 0));
      this.paging(tmppatients); 
    } else {
      this.paging(this.patients);     
    }
  }
  openPatientsDetail(patient) {
    const modalRef = this.modalService.open(ModalDetailComponent,{windowClass:"hugeModal"});
    modalRef.componentInstance.page = 'patientlist'; // should be the page
    modalRef.componentInstance.patient = patient; // should be the page

    modalRef.result.then((result) => {
      if(result == "close") {

      } else if (result != null) {
        if(result.email != "" && result.email != undefined && result.email != null) {
          
          for(let i = 0; i < this.patientsFilter.length; i++) {
            for(let j = 0; j < this.patientsFilter[i].patients.length; j++) {
              if(this.patientsFilter[i].patients[j].id == result.id) {
                this.patientsFilter[i].patients[j].email = result.email;
                this.patientsFilter[i].patients[j].firstname = result.firstname;
                this.patientsFilter[i].patients[j].lastname = result.lastname;
                this.patientsFilter[i].patients[j].username = result.username;
                this.patientsFilter[i].patients[j].username = result.username;
                this.patientsFilter[i].patients[j].addresscity = result.addresscity;
                this.patientsFilter[i].patients[j].addressdistrict = result.addressdistrict;
                this.patientsFilter[i].patients[j].addresshoroo = result.addresshoroo;
                this.patientsFilter[i].patients[j].addressdesc = result.addressdesc;
                this.patientsFilter[i].patients[j].gender = result.gender;
                this.patientsFilter[i].patients[j].phone = result.phone;
              }
            }
          }
          for(let i = 0; i < this.patients.length; i++) {            
            if(this.patients[i].id == result.id) {
              this.patients[i].email = result.email;
              this.patients[i].firstname = result.firstname;
              this.patients[i].lastname = result.lastname;
              this.patients[i].username = result.username;
              this.patients[i].addresscity = result.addresscity;
              this.patients[i].addressdistrict = result.addressdistrict;
              this.patients[i].addresshoroo = result.addresshoroo;
              this.patients[i].addressdesc = result.addressdesc;
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
