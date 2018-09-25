import { Component, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@Component({
  selector: 'app-medical-therapy-detail',
  templateUrl: './medical-therapy-detail.component.html',
  styleUrls: ['./medical-therapy-detail.component.scss']
})
export class MedicalTherapyDetailComponent {

  @Input()patient: any;
  @Input()page: string;  
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
 
  private signaturePadOptions: Object = {
    'minWidth': 1,
    'canvasWidth': 500,
    'canvasHeight': 200,
    'penColor' : "black"
  };
  borderBottom = {'border-bottom' : 'thin solid lightgrey'};
  humanAnatomyBase64 = "";
  selectedMoment= new Date(2018, 1, 12, 20, 30);

  detailedView: boolean = false;

  myForm: FormGroup;
  
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  therapies = [
    {
      date : "2018.01.12",
      pulse : "80",
      therapySteps : "Tos",
      position: [
        {
          name: "Урд",
          value: "1"
        },
        {
          name: "Хойно",
          value: "1"
        },
        {
          name: "Доор",
          value: ""
        },
        {
          name: "Дээр",
          value: ""
        },
      ],
      symptoms : "Baihgui",
      signature: ""
    },
    {
      date : "2018.02.20",
      pulse : "98",
      therapySteps : "Shavar",
      position: [
        {
          name: "Урд",
          value: "1"
        },
        {
          name: "Хойно",
          value: "1"
        },
        {
          name: "Доор",
          value: ""
        },
        {
          name: "Дээр",
          value: ""
        },
      ],
      symptoms : "Baihgui",
      signature: ""
    }
  ];
  therapiesFilter: any[] = [];
  chosenTherapy : any = {};
  dateFilter: string = "";
  symptomsFilter: string = "";

  pageCount: number = 0;
  chosenPage: number = 0;
  pageNumbers: any[] = [];

  therapyResult : string = "";
  therapyFit : string = "";
  therapyWarning: string = "";
  therapyAdvice: string = "";
  therapyAdviceAdditional :string = "";
  therapyExamedDoctor: string = "";

  constructor(
   public activeModal: NgbActiveModal,
   public formBuilder: FormBuilder,
   public http: HttpClient
  ) {
    this.createForm();
    this.paging(this.therapies);
    console.log(this.selectedMoment);
  }
  ngAfterViewChecked() {    
  }
  ngAfterViewInit() {
    // this.signaturePad.clear();
  } 
  createForm() {
    this.myForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }
  paging(therapies: any) {
    this.pageCount = Math.ceil(therapies.length / 10);
    this.pageNumbers = [];
    this.therapiesFilter = [];
    console.log(this.pageCount);
    for(let i = 0; i < this.pageCount; i++) {
      this.pageNumbers.push(i + 1);
    }
    for (let i = 0; i < this.pageCount; i++) {
      let tmp = {
        page: i,
        therapies: []
      }
      for(let j = i * 10; j < i * 10 + 10; j++) {
        if(j < therapies.length) {
          tmp.therapies.push(therapies[j]);
        }
      }
      this.therapiesFilter.push(tmp);
    }
    console.log(this.pageNumbers);
  }
  closeModal() {
    this.activeModal.close("close");
  }
  savePatient() {
    this.activeModal.close(this.patient);
  }
  drawClear() {
    this.signaturePad.clear();
  }
  drawErase(){
    this.signaturePad.clear();
  }
  dateFilterChange(event){
    if(event != "") {
      let tmptherapies = this.therapies.filter(user => (user.date.toLowerCase().indexOf(event.toLowerCase()) >= 0));
      this.paging(tmptherapies);
    } else {
      this.paging(this.therapies);
    }
  }
  symptomsFilterChange(event){
    if(event != "") {
      let tmptherapies = this.therapies.filter(user => (user.symptoms.toLowerCase().indexOf(event.toLowerCase()) >= 0));  
      this.paging(tmptherapies);
    } else {
      this.paging(this.therapies);    
    }  
  }
  openTherapiesDetail(therapy) {
    this.chosenTherapy = therapy;
    this.detailedView = true;
  }
}