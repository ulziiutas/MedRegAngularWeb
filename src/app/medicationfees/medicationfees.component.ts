import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConcludedfeeComponent } from '../concludedfee/concludedfee.component';

import { NgbdModal } from '../modal/modal';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { ModalAddComponent } from '../modal-add/modal-add.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-medicationfees',
  templateUrl: './medicationfees.component.html',
  styleUrls: ['./medicationfees.component.css']
})
export class MedicationfeesComponent implements OnInit {

  medications = [    
    {
      id: 1,
      name: "Царгис",
      type: "",
      unit: "ширхэг",
      price: 100000
    },
    {
      id: 2,
      name: "Бариа",
      type: "",
      unit: "SET",
      price: 100000
    },
    {
      id: 3,
      name: "Шавар",
      type: "B1",
      unit: "SET",
      price: 100000
    },
    {
      id: 4,
      name: "Шавар",
      type: "B2",
      unit: "SET",
      price: 100000
    },
  ];
  pageCount: number = 0;
  chosenPage: number = 0;
  pageNumbers: any[] = [];
  medicationsFilter: any[] = [];
  borderBottom = {'border-bottom' : 'thin solid lightgrey'};
  bodyText: string; 
  nameFilter: string = "";
  typeFilter: string = "";
  unitFilter: string = "";
  priceFilter: string = "";

  constructor(
    public viewRef: ViewContainerRef,
    private modalService: NgbModal
  ) { 
    // this.medicationsFilter = this.medications;
    this.paging(this.medications);
    this.bodyText = 'This text can be updated in modal 1';
  }

  ngOnInit() {
  }
  paging(medications: any) {
    this.pageCount = Math.ceil(medications.length / 10);
    this.pageNumbers = [];
    this.medicationsFilter = [];
    for(let i = 0; i < this.pageCount; i++) {
      this.pageNumbers.push(i + 1);
    }
    for (let i = 0; i < this.pageCount; i++) {
      let tmp = {
        page: i,
        medications: []
      }
      for(let j = i * 10; j < i * 10 + 10; j++) {
        if(j < medications.length) {
          tmp.medications.push(medications[j]);
        }
      }
      this.medicationsFilter.push(tmp);
    }
  }
  choosePage(number : number) {
    this.chosenPage = number - 1;
  }
  openModalDelete(medication : any) {
    const modalRef = this.modalService.open(ModalDeleteComponent);
    modalRef.componentInstance.data = medication; // should be the medication
    modalRef.componentInstance.page = 'medicationfees'; // should be the page

    modalRef.result.then((result) => {
      if(result == "close") {

      } else if (result != null) {
        if(result.name != "" && result.name != undefined && result.name != null) {          
          for(let i = 0; i < this.medications.length; i++) {
            if(this.medications[i].id == result.id) {
              this.medications.splice(i,1);
            }            
          }
          this.paging(this.medications);
        }
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  openModalEdit(medication : any) {
    const modalRef = this.modalService.open(ModalEditComponent);
    modalRef.componentInstance.data = medication; // should be the medication
    modalRef.componentInstance.page = 'medicationfees'; // should be the page

    modalRef.result.then((result) => {
      if(result == "close") {

      } else if (result != null) {
        if(result.email != "" && result.email != undefined && result.email != null) {
          for(let i = 0; i < this.medicationsFilter.length; i++) {
            for(let j = 0; j < this.medicationsFilter[i].medications.length; j++) {
              if(this.medicationsFilter[i].medications[j].id == result.id) {
                this.medicationsFilter[i].medications[j].name = result.name;
                this.medicationsFilter[i].medications[j].type = result.type;
                this.medicationsFilter[i].medications[j].unit = result.unit;
                this.medicationsFilter[i].medications[j].price = result.price;
              }
            }
          }
          for(let i = 0; i < this.medications.length; i++) {            
            if(this.medications[i].id == result.id) {
              this.medications[i].name = result.name;
              this.medications[i].type = result.type;
              this.medications[i].unit = result.unit;
              this.medications[i].price = result.price;
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
    modalRef.componentInstance.page = 'medicationfees'; // should be the pages

    modalRef.result.then((result) => {
      console.log(result);
      if(result == "close") {

      } else if (result != null) {
        if(result.name != "" && result.name != undefined && result.name != null) {
          if(this.medicationsFilter[this.medicationsFilter.length-1].medications.length == 10) {
            let tmp = {
              page: this.medicationsFilter.length,
              medications: []
            }
            tmp.medications.push(result)
            this.pageCount ++;
            this.pageNumbers.push(this.pageCount);
            this.medicationsFilter.push(tmp);
          } else {
            this.medicationsFilter[this.medicationsFilter.length-1].medications.push(result);
          }
          this.medications.push(result);
          this.chosenPage = this.medicationsFilter.length - 1;
        }
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  nameFilterChange(event){
    if(event != "") {
      let tmpmedications = this.medications.filter(medication => (medication.name.toLowerCase().indexOf(event.toLowerCase()) >= 0));
      this.paging(tmpmedications);
    } else {
      this.paging(this.medications);
    }
  }
  typeFilterChange(event){
    if(event != "") {
      let tmpmedications = this.medications.filter(medication => (medication.type.toLowerCase().indexOf(event.toLowerCase()) >= 0));  
      this.paging(tmpmedications);
    } else {
      this.paging(this.medications);    
    }  
  }
  unitFilterChange(event){
    if(event != "") {
      let tmpmedications = this.medications.filter(medication => (medication.unit.toLowerCase().indexOf(event.toLowerCase()) >= 0));   
      this.paging(tmpmedications); 
    } else {
      this.paging(this.medications);   
    } 
  }
  priceFilterChange(event){
    if(event != "") {
      let tmpmedications = this.medications.filter(medication => (medication.price.toString() == event.toString()) );
      this.paging(tmpmedications); 
    } else {
      this.paging(this.medications);     
    }
  }
}

