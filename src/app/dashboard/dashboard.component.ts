import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  @ViewChild('elToFocus') el : ElementRef;

  hover : number = -1;


  

  tabs: any[] = [
    {
      compname : 'usermanagement',
      name : 'User Management',
      status : 'active',
      clicked : false,
      authtype : 'USER',
      background : '#84a6cd',
      border : 'none',
      bottomborder : 'thin solid white',
      color : 'white'
    },
    {
      compname : 'patientlist',
      name : 'Patients List',
      status : 'active',
      clicked : false,
      authtype : 'USER',
      background : '#84a6cd',
      border : 'none',
      bottomborder : 'thin solid white',
      color : 'white'
    },
    {
      compname : 'medicalExamList',
      name : 'Medical Examination List',
      status : 'active',
      clicked : false,
      authtype : 'USER',
      background : '#84a6cd',
      border : 'none',
      bottomborder : 'thin solid white',
      color : 'white'
    },
    {
      compname : 'medicalTherapyList',
      name : 'Medical Therapy List',
      status : 'active',
      clicked : false,
      authtype : 'USER',
      background : '#84a6cd',
      border : 'none',
      bottomborder : 'thin solid white',
      color : 'white'
    },
    {
      compname : 'medicationfees',
      name : 'Medication Fees',
      status : 'active',
      clicked : false,
      authtype : 'USER',
      background : '#84a6cd',
      border : 'none',
      bottomborder : 'thin solid white',
      color : 'white'
    },
    {
      compname : 'concludedfee',
      name : 'Concluded Fee',
      status : 'active',
      clicked : false,
      authtype : 'USER',
      background : '#84a6cd',
      border : 'none',
      bottomborder : 'thin solid white',
      color : 'white'
    },
    {
      compname : 'userprofile',
      name : 'User Profile',
      status : 'active',
      clicked : false,
      authtype : 'USER',
      background : '#84a6cd',
      border : 'none',
      bottomborder : 'thin solid white',
      color : 'white'
    },
  ];

  constructor() {
  }
  chosenTab(tab) {
    for(let i = 0; i < this.tabs.length; i++) {
      if(tab.name != this.tabs[i].name) {
        this.tabs[i].clicked = false;
      } else {
        this.tabs[i].clicked = true;
      }
    }
  }
  pressedStyle(tab) {
    if(tab.clicked)
    return {'background-color' : 'white','color' : '#84a6cd','border' : 'none','border-bottom' : 'thin solid white'}
  }
  buttonStyle(tab) {
    return {'background-color' : 'white','color' : '#84a6cd','border' : 'none','border-bottom' : 'thin solid white'}
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
