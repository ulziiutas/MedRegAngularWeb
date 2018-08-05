import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConcludedfeeComponent } from '../concludedfee/concludedfee.component';

import { NgbdModal } from '../modal/modal';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { ModalAddComponent } from '../modal-add/modal-add.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  users = [    
    {
      id: 1,
      firstname: "Leanne",
      lastname: "Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      password: "Sincere@april.biz",
      status: "A",
      category: 'Өвчтөн'
    },
    {
      id: 2,
      firstname: "Ervin",
      lastname: "Howell",
      username: "Antonette",
      email: "Shanna@melissa.tvsdfsd",
      password: "Shanna@melissa.tvsdfsd",
      status: "A",
      category: 'Өвчтөн'
    },    
    {
      id: 3,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Өвчтөн'
    },    
    {
      id: 4,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Өвчтөн'
    },    
    {
      id: 5,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Өвчтөн'
    },    
    {
      id: 6,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Өвчтөн'
    },    
    {
      id: 7,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
    },    
    {
      id: 8,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
    },    
    {
      id: 9,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
    },    
    {
      id: 10,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
    },    
    {
      id: 11,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
    },    
    {
      id: 12,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
    },    
    {
      id: 13,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
    },    
    {
      id: 14,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
    },    
    {
      id: 15,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
    },

    {
      id: 16,
      firstname: "Leanne",
      lastname: "Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      password: "Sincere@april.biz",
      status: "A",
      category: 'Админ'
    },
    {
      id: 17,
      firstname: "Ervin",
      lastname: "Howell",
      username: "Antonette",
      email: "Shanna@melissa.tvsdfsd",
      password: "Shanna@melissa.tvsdfsd",
      status: "A",
      category: 'Админ'
    },    
    {
      id: 18,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
    },    
    {
      id: 19,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
    },    
    {
      id: 20,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
    },    
    {
      id: 21,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
    },    
    {
      id: 22,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
    },    
    {
      id: 23,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
    },    
    {
      id:24,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
    },    
    {
      id: 25,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
    },    
    {
      id: 26,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
    },    
    {
      id: 27,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
    },    
    {
      id: 28,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
    },    
    {
      id: 29,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
    },    
    {
      id: 30,
      firstname: "Nicholas",
      lastname: "DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      password: "Rey.Padberg@rosamond.biz",
      status: "A",
      category: 'Админ'
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
    modalRef.componentInstance.data = user; // should be the user
    modalRef.componentInstance.page = 'usermanagement'; // should be the page

    modalRef.result.then((result) => {
      if(result == "close") {

      } else if (result != null) {
        if(result.email != "" && result.email != undefined && result.email != null) {

          
          for(let i = 0; i < this.users.length; i++) {            
            if(this.users[i].id == result.id) {
              this.users.splice(i,1);
            }            
          }
          this.paging(this.users);
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
          for(let i = 0; i < this.usersFilter.length; i++) {
            for(let j = 0; j < this.usersFilter[i].users.length; j++) {
              if(this.usersFilter[i].users[j].id == result.id) {
                this.usersFilter[i].users[j].email = result.email;
                this.usersFilter[i].users[j].firstname = result.firstname;
                this.usersFilter[i].users[j].lastname = result.lastname;
                this.usersFilter[i].users[j].username = result.username;
                this.usersFilter[i].users[j].password = result.password;
                this.usersFilter[i].users[j].category = result.category;
                this.usersFilter[i].users[j].status = result.status;
              }
            }
          }
          for(let i = 0; i < this.users.length; i++) {            
            if(this.users[i].id == result.id) {
              this.users[i].email = result.email;
              this.users[i].firstname = result.firstname;
              this.users[i].lastname = result.lastname;
              this.users[i].username = result.username;
              this.users[i].password = result.password;
              this.users[i].category = result.category;
              this.users[i].status = result.status;
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
          if(this.usersFilter[this.usersFilter.length-1].users.length == 10) {
            let tmp = {
              page: this.usersFilter.length,
              users: []
            }
            tmp.users.push(result)
            this.pageCount ++;
            this.pageNumbers.push(this.pageCount);
            this.usersFilter.push(tmp);
          } else {
            this.usersFilter[this.usersFilter.length-1].users.push(result);
          }
          this.users.push(result);
          this.chosenPage = this.usersFilter.length - 1;
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
