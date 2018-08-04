import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConcludedfeeComponent } from '../concludedfee/concludedfee.component';

import { NgbdModal } from '../modal/modal';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {

  users = [
    {
      id: 1,
      firstname: "Leanne",
      lastname: "Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      password: "Sincere@april.biz"
    },
    {
      id: 2,
      firstname: "Ervin",
      lastname: "Howell",
      username: "Antonette",
      email: "Shanna@melissa.tvsdfsd",
      password: "Shanna@melissa.tvsdfsd"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },

    {
      id: 1,
      firstname: "Leanne",
      lastname: "Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      password: "Sincere@april.biz"
    },
    {
      id: 2,
      firstname: "Ervin",
      lastname: "Howell",
      username: "Antonette",
      email: "Shanna@melissa.tvsdfsd",
      password: "Shanna@melissa.tvsdfsd"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz"
    }
  ];
  pageCount: number = 0;
  chosenPage: number = 0;
  pageNumbers: any[] = [];
  usersFilter: any[] = [];
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
    // this.usersFilter = this.users;
    this.paging(this.users);
    this.bodyText = 'This text can be updated in modal 1';
  }

  ngOnInit() {
  }
  paging(users: any) {
    this.pageCount = Math.ceil(users.length / 10);
    this.pageNumbers = [];
    this.usersFilter = [];
    console.log(this.pageCount);
    for(let i = 0; i < this.pageCount; i++) {
      this.pageNumbers.push(i + 1);
    }
    for (let i = 0; i < this.pageCount; i++) {
      let tmp = {
        page: i,
        users: []
      }
      for(let j = i * 10; j < i * 10 + 10; j++) {
        if(j < users.length) {
          tmp.users.push(users[j]);
        }
      }
      this.usersFilter.push(tmp);
    }
    console.log(this.pageNumbers);
  }
  choosePage(number : number) {
    this.chosenPage = number - 1;
  }
  openModalDelete(user : any) {
    const modalRef = this.modalService.open(ModalDeleteComponent);
    modalRef.componentInstance.user = user; // should be the user
    modalRef.componentInstance.page = 'usermanagement'; // should be the page

    modalRef.result.then((result) => {
      if(result == "close") {

      } else if (result != null) {
        if(result.email != "" && result.email != undefined && result.email != null) {
          for(let i = 0; i < this.users.length; i ++) {
            if(this.users[i].email == result.email) {
              this.users.splice(i,1);
            }
          }
        }
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  openModalEdit(user : any) {
    const modalRef = this.modalService.open(ModalEditComponent);
    modalRef.componentInstance.user = user; // should be the user
    modalRef.componentInstance.page = 'usermanagement'; // should be the page

    modalRef.result.then((result) => {
      if(result == "close") {

      } else if (result != null) {
        if(result.email != "" && result.email != undefined && result.email != null) {
          for(let i = 0; i < this.users.length; i ++) {
            if(this.users[i].email == result.email) {
              this.users.splice(i,1);
            }
          }
        }
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  firstnameFilterChange(event){
    if(event != "") {
      let tmpUsers = this.users.filter(user => (user.firstname.toLowerCase().indexOf(event.toLowerCase()) >= 0));
      this.paging(tmpUsers);
    } else {
      this.paging(this.users);
    }
  }
  lastnameFilterChange(event){
    if(event != "") {
      let tmpUsers = this.users.filter(user => (user.lastname.toLowerCase().indexOf(event.toLowerCase()) >= 0));  
      this.paging(tmpUsers);
    } else {
      this.paging(this.users);    
    }  
  }
  usernameFilterChange(event){
    if(event != "") {
      let tmpUsers = this.users.filter(user => (user.username.toLowerCase().indexOf(event.toLowerCase()) >= 0));   
      this.paging(tmpUsers); 
    } else {
      this.paging(this.users);   
    } 
  }
  emailFilterChange(event){
    if(event != "") {
      let tmpUsers = this.users.filter(user => (user.email.toLowerCase().indexOf(event.toLowerCase()) >= 0));
      this.paging(tmpUsers); 
    } else {
      this.paging(this.users);     
    }
  }
}
