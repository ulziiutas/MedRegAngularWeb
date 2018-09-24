import { Component, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.css']
})
export class ModalDetailComponent {

  @Input()patient: any;
  @Input()page: string;  
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
 
  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 1,
    'canvasWidth': 300,
    'canvasHeight': 300,
    'penColor' : "rgb(255, 0, 0)"
  };
  humanAnatomyBase64 = ""
  selectedMoment= new Date(2018, 1, 12, 20, 30);
  
  myForm: FormGroup;

  cities = [
    {
      name: "Улаанбаатар",
      districts: [
        {
          name: "Багануур дүүрэг"
        },
        {
          name: "Багахангай дүүрэг"
        },   
        {
          name: "Баянгол дүүрэг"
        },
        {
          name: "Баянзүрх дүүрэг"
        },
        {
          name: "Налайх дүүрэг"
        },
        {
          name: "Сонгинохайрхан дүүрэг"
        },
        {
          name: "Сүхбаатар дүүрэг"
        },
        {
          name: "Хан-Уул дүүрэг"
        },
        {
          name: "Чингэлтэй дүүрэг"
        }
      ]
    },
    {
      name: "Архангай",
      districts: [
        {
          name: "Батцэнгэл сум"
        },
        {
          name: "Булган сум"
        },
        {
          name: "Жаргалант сум"
        },
        {
          name: "Ихтамир сум"
        },
        {
          name: "Өгийнуур сум"
        },
        {
          name: "Өлзийт сум"
        },
        {
          name: "Өндөр-Улаан сум"
        },
        {
          name: "Тариат сум"
        },    
        {
          name: "Цахир сум"
        },    
        {
          name: "Түвшрүүлэх сум"
        },     
        {
          name: "Хайрхан сум"
        },   
        {
          name: "Хангай сум"
        },   
        {
          name: "Хашаат сум"
        },   
        {
          name: "Хотонт сум"
        },   
        {
          name: "Цэнхэр сум"
        },   
        {
          name: "Чулуут сум"
        }, 
        {
          name: "Эрдэнэбулган сум"
        }, 
        {
          name: "Эрдэнэмандал сум"
        }
      ]
    },
    {
      name: "Баян-Өлгий",
      districts: [
        {
          name: "Алтай сум"
        },
        {
          name: "Алтанцөгц сум"
        },
        {
          name: "Баяннуур сум"
        },
        {
          name: "Бугат сум"
        },
        {
          name: "Булган сум"
        },
        {
          name: "Буянт сум"
        },
        {
          name: "Дэлгүүн сум"
        },
        {
          name: "Ногооннуур сум"
        },
        {
          name: "Сагсай сум"
        },
        {
          name: "Цагааннуур сум"
        },
        {
          name: "Толбо сум"
        },
        {
          name: "Улаанхус сум"
        },
        {
          name: "Цэнгэл сум"
        },
      ]
    },
    {
      name: "Баянхонгор",
      districts: [
        {
          name: "Баянхонгор сум"
        },
        {
          name: "Баацагаан сум"
        },
        {
          name: "Баянбулаг сум"
        },
        {
          name: "Баянговь сум"
        },
        {
          name: "Баянлиг сум"
        },
        {
          name: "Баян-Овоо сум"
        },
        {
          name: "Баян-Өндөр сум"
        },
        {
          name: "Баянцагаан сум"
        },
        {
          name: "Богд сум"
        },
        {
          name: "Бөмбөгөр сум"
        },
        {
          name: "Бууцагаан сум"
        },
        {
          name: "Галуут сум"
        },
        {
          name: "Гурванбулаг сум"
        },
        {
          name: "Жаргалант сум"
        },
        {
          name: "Жинст сум"
        },
        {
          name: "Заг сум"
        },
        {
          name: "Өлзийт сум"
        },
        {
          name: "Хүрээмарал сум"
        },
        {
          name: "Шинэжинст сум"
        },
        {
          name: "Эрдэнэцогт сум"
        },
      ]
    },
    {
      name: "Булган",
      districts: [
        {
          name: "Булган сум"
        },
        {
          name: "Баян-Агт сум"
        },
        {
          name: "Баяннуур сум"
        },
        {
          name: "Бугат сум"
        },
        {
          name: "Бүрэгхангай сум"
        },
        {
          name: "Гурванбулаг сум"
        },
        {
          name: "Дашинчилэн сум"
        },
        {
          name: "Могод сум"
        },
        {
          name: "Орхон сум"
        },
        {
          name: "Рашаант сум"
        },
        {
          name: "Сайхан сум"
        },
        {
          name: "Сэлэнгэ сум"
        },
        {
          name: "Тэшиг сум"
        },
        {
          name: "Хангал сум"
        },
        {
          name: "Хишиг-Өндөр сум"
        },
        {
          name: "Хутаг-Өндөр сум"
        },
      ]
    },
    {
      name: "Говь-Алтай",
      districts: [
        {
          name: "Алтай сум"
        },
        {
          name: "Баян-Уул сум"
        },
        {
          name: "Бигэр сум"
        },
        {
          name: "Бугат сум"
        },
        {
          name: "Дарви сум"
        },
        {
          name: "Дэлгэр сум"
        },
        {
          name: "Есөнбулаг сум"
        },
        {
          name: "Жаргалан сум"
        },
        {
          name: "Тайшир сум"
        },
        {
          name: "Тонхил сум"
        },
        {
          name: "Төгрөг сум"
        },
        {
          name: "Халиун сум"
        },
        {
          name: "Хөхморьт сум"
        },
        {
          name: "Цогт сум"
        },
        {
          name: "Цээл сум"
        },
        {
          name: "Чандмань сум"
        },
        {
          name: "Шарга сум"
        },
        {
          name: "Эрдэнэ сум"
        },
      ]
    },
    {
      name: "Говьсүмбэр",
      districts: [
        {
          name: "Сүмбэр сум"
        },
        {
          name: "Баянтал сум"
        },
        {
          name: "Шивээговь сум"
        },
      ]
    },
    {
      name: "Дархан-Уул",
      districts: [
        {
          name: "Дархан"
        },
        {
          name: "Хонгор сум"
        },
        {
          name: "Орхон сум"
        },
        {
          name: "Шарынгол сум"
        },
      ]
    },
    {
      name: "Дорноговь",
      districts: [
        {
          name: "Айраг сум"
        },
        {
          name: "Алтанширээ сум"
        },
        {
          name: "Даланжаргалан сум"
        },
        {
          name: "Дэлгэрэх сум"
        },
        {
          name: "Замын-Үүд сум"
        },
        {
          name: "Иххэт сум"
        },
        {
          name: "Мандах сум"
        },
        {
          name: "Өргөн сум"
        },
        {
          name: "Сайхандулаан сум"
        },
        {
          name: "Улаанбадрах сум"
        },
        {
          name: "Хатанбулаг сум"
        },
        {
          name: "Хөвсгөл сум"
        },
        {
          name: "Эрдэнэ сум"
        },
      ]
    },
    {
      name: "Дорнод",
      districts: [
        {
          name: "Баяндун сум"
        },
        {
          name: "Баянтүмэн сум"
        },
        {
          name: "Баян-Уул сум"
        },
        {
          name: "Булган сум"
        },
        {
          name: "Гурванзагал сум"
        },
        {
          name: "Дашбалбар сум"
        },
        {
          name: "Матад сум"
        },
        {
          name: "Сэргэлэн сум"
        },
        {
          name: "Халхгол сум"
        },
        {
          name: "Хөлөнбуйр сум"
        },
        {
          name: "Хэрлэн (Сүмбэр)"
        },
        {
          name: "Цагаан-Овоо сум"
        },
        {
          name: "Чулуунхороот сум (Эрээнцав)"
        },
        {
          name: "Чойбалсан сум"
        }
      ]
    },
    {
      name: "Дундговь",
      districts: [
        {
          name: "Адаацаг сум"
        },
        {
          name: "Баянжаргалан сум"
        },
        {
          name: "Говь-Угтаал сум"
        },
        {
          name: "Гурвансайхан сум"
        },
        {
          name: "Дэлгэрхангай сум"
        },
        {
          name: "Дэлгэрцогт сум"
        },
        {
          name: "Дэрэн сум"
        },
        {
          name: "Луус сум"
        },
        {
          name: "Өлзийт сум"
        },
        {
          name: "Өндөршил сум"
        },
        {
          name: "Сайхан-Овоо сум"
        },
        {
          name: "Сайнцагаан сум"
        },
        {
          name: "Хулд сум"
        },
        {
          name: "Цагаандэлгэр сум"
        },
        {
          name: "Эрдэнэдалай сум"
        } 
      ]
    },
    {
      name: "Завхан",
      districts: [
        {
          name: "Алдархаан сум"
        },
        {
          name: "Асгат сум"
        },
        {
          name: "Баянтэс сум"
        },
        {
          name: "Баянхайрхан сум"
        },
        {
          name: "Дөрвөлжин сум"
        },
        {
          name: "Завханмандал сум"
        },
        {
          name: "Идэр сум"
        },
        {
          name: "Их-Уул сум"
        },
        {
          name: "Нөмрөг сум"
        },
        {
          name: "Отгон сум"
        },
        {
          name: "Сантмаргац сум"
        },
        {
          name: "Сонгино сум"
        },
        {
          name: "Тосонцэнгэл сум"
        },
        {
          name: "Түдэвтэй сум"
        },
        {
          name: "Тэлмэн сум"
        },
        {
          name: "Тэс сум"
        },
        {
          name: "Ургамал сум"
        },
        {
          name: "Цагаанхайрхан сум"
        },
        {
          name: "Цагаанчулуут сум"
        },
        {
          name: "Цэцэн-Уул сум"
        },
        {
          name: "Шилүүстэй сум"
        },
        {
          name: "Эрдэнэхайрхан сум"
        },
        {
          name: "Яруу сум"
        }
      ]
    },
    {
      name: "Орхон",
      districts: [
        {
          name: "Баян-Өндөр сум"
        },
        {
          name: "Жаргалант сум"
        }
      ]
    },
    {
      name: "Өвөрхангай",
      districts: [
        {
          name: "Арвайхээр"
        },
        {
          name: "Баруунбаян-Улаан сум"
        },   
        {
          name: "Бат-Өлзий сум"
        },
        {
          name: "Баянгол сум"
        },
        {
          name: "Баян-Өндөр сум"
        },
        {
          name: "Богд сум"
        },
        {
          name: "Бүрд сум"
        },
        {
          name: "Гучин-Ус сум"
        },
        {
          name: "Хархорин сум"
        },
        {
          name: "Хайрхандулаан сум"
        },
        {
          name: "Хужирт сум"
        },
        {
          name: "Нарийнтээл сум"
        },
        {
          name: "Өлзийт сум"
        },
        {
          name: "Сант сум"
        },
        {
          name: "Тарагт сум"
        },
        {
          name: "Төгрөг сум"
        },
        {
          name: "Уянга сум"
        },
        {
          name: "Есөнзүйл сум"
        },
        {
          name: "Зүүнбаян-Улаан сум"
        }
      ]
    },
    {
      name: "Өмнөговь",
      districts: [
        {
          name: "Баяндалай сум"
        },
        {
          name: "Баян-Овоо сум"
        },   
        {
          name: "Булган сум"
        },
        {
          name: "Гурвантэс сум"
        },
        {
          name: "Мандал-Овоо сум"
        },
        {
          name: "Манлай сум"
        },
        {
          name: "Ноён сум"
        },
        {
          name: "Номгон сум"
        },
        {
          name: "Сэврэй сум"
        },
        {
          name: "Ханбогд сум"
        },
        {
          name: "Ханхонгор сум"
        },
        {
          name: "Хүрмэн сум"
        },
        {
          name: "Цогт-Овоо сум"
        },
        {
          name: "Цогтцэций сум (Тавантолгой)"
        }
      ]
    },
    {
      name: "Сүхбаатар",
      districts: [
        {
          name: "Асгат сум"
        },
        {
          name: "Баяндэлгэр сум"
        },   
        {
          name: "Дарьганга сум"
        },
        {
          name: "Мөнххаан сум"
        },
        {
          name: "Наран сум"
        },
        {
          name: "Онгон сум"
        },
        {
          name: "Сүхбаатар сум"
        },
        {
          name: "Түвшинширээ сум"
        },
        {
          name: "Түмэнцогт сум"
        },
        {
          name: "Уулбаян сум"
        },
        {
          name: "Халзан сум"
        },
        {
          name: "Эрдэнэцагаан сум"
        }
      ]
    },
    {
      name: "Сэлэнгэ",
      districts: [
        {
          name: "Алтанбулаг сум"
        },
        {
          name: "Баруунбүрэн сум"
        },   
        {
          name: "Баянгол сум"
        },
        {
          name: "Ерөө сум"
        },
        {
          name: "Жавхлант сум"
        },
        {
          name: "Зүүнбүрэн сум"
        },
        {
          name: "Мандал сум"
        },
        {
          name: "Орхон сум"
        },
        {
          name: "Орхонтуул сум"
        },
        {
          name: "Сайхан сум"
        },
        {
          name: "Сант сум"
        },
        {
          name: "Сүхбаатар сум"
        },
        {
          name: "Түшиг сум"
        },
        {
          name: "Хүдэр сум"
        },
        {
          name: "Хушаат сум"
        },
        {
          name: "Цагааннуур сум"
        },
        {
          name: "Шаамар сум"
        }
      ]
    },
    {
      name: "Төв",
      districts: [
        {
          name: "Алтанбулаг сум"
        },
        {
          name: "Аргалант сум"
        },   
        {
          name: "Архуст сум"
        },
        {
          name: "Баян сум"
        },
        {
          name: "Батсүмбэр сум"
        },
        {
          name: "Баяндэлгэр сум"
        },
        {
          name: "Баянжаргалан сум"
        },
        {
          name: "Баян-Өнжүүл сум"
        },
        {
          name: "Баянхангай сум"
        },
        {
          name: "Баянцагаан сум"
        },
        {
          name: "Баянцогт сум"
        },
        {
          name: "Баянчандмань сум"
        },
        {
          name: "Борнуур сум"
        },
        {
          name: "Бүрэн сум"
        },
        {
          name: "Дэлгэрхаан сум"
        },
        {
          name: "Жаргалант сум"
        },
        {
          name: "Заамар сум"
        },
        {
          name: "Лүн сум"
        },
        {
          name: "Мөнгөнморьт сум"
        },
        {
          name: "Өндөрширээт сум"
        },
        {
          name: "Сэргэлэн сум"
        },
        {
          name: "Сүмбэр сум"
        },
        {
          name: "Угтаал сум"
        },
        {
          name: "Цээл сум"
        },
        {
          name: "Эрдэнэ сум"
        },
        {
          name: "Эрдэнэсант сум"
        }
      ]
    },
    {
      name: "Увс",
      districts: [
        {
          name: "Баруунтуруун сум"
        },
        {
          name: "Бөхмөрөн сум"
        },   
        {
          name: "Давст сум"
        },
        {
          name: "Завхан сум"
        },
        {
          name: "Зүүнговь сум"
        },
        {
          name: "Зүүнхангай сум"
        },
        {
          name: "Малчин сум"
        },
        {
          name: "Наранбулаг сум"
        },
        {
          name: "Өлгий сум"
        },
        {
          name: "Өмнөговь сум"
        },
        {
          name: "Өндөрхангай сум"
        },
        {
          name: "Сагил сум"
        },
        {
          name: "Тариалан сум"
        },
        {
          name: "Тэс сум"
        },
        {
          name: "Түргэн сум"
        },
        {
          name: "Улаангом сум"
        },
        {
          name: "Ховд сум"
        },
        {
          name: "Хяргас сум"
        },
        {
          name: "Цагаанхайрхан сум"
        }
      ]
    },
    {
      name: "Ховд",
      districts: [
        {
          name: "Ховд (Жаргалант)"
        },
        {
          name: "Алтай сум"
        },   
        {
          name: "Булган сум"
        },
        {
          name: "Буянт сум"
        },
        {
          name: "Дарви сум"
        },
        {
          name: "Дөргөн сум"
        },
        {
          name: "Дуут сум"
        },
        {
          name: "Зэрэг сум"
        },
        {
          name: "Манхан сум"
        },
        {
          name: "Мөнххайрхан сум"
        },
        {
          name: "Мөст сум"
        },
        {
          name: "Мянгад сум"
        },
        {
          name: "Үенч сум"
        },
        {
          name: "Ховд сум"
        },
        {
          name: "Цэцэг сум"
        },
        {
          name: "Чандмань сум"
        },
        {
          name: "Эрдэнэбүрэн сум"
        }
      ]
    },
    {
      name: "Хөвсгөл",
      districts: [
        {
          name: "Алаг-Эрдэнэ сум"
        },
        {
          name: "Арбулаг сум"
        },   
        {
          name: "Баянзүрх сум"
        },
        {
          name: "Бүрэнтогтох сум"
        },
        {
          name: "Галт сум"
        },
        {
          name: "Жаргалант сум"
        },
        {
          name: "Их-Уул сум"
        },
        {
          name: "Мөрөн сум"
        },
        {
          name: "Рашаант сум"
        },
        {
          name: "Рэнчинлхүмбэ сум"
        },
        {
          name: "Тариалан сум"
        },
        {
          name: "Тосонцэнгэл сум"
        },
        {
          name: "Төмөрбулаг сум"
        },
        {
          name: "Түнэл сум"
        },
        {
          name: "Улаан-Уул сум"
        },
        {
          name: "Ханх сум"
        },
        {
          name: "Хатгал сум"
        },
        {
          name: "Цагааннуур сум"
        },
        {
          name: "Цагаан-Уул сум"
        },
        {
          name: "Цагаан-Үүр сум"
        },
        {
          name: "Цэцэрлэг сум"
        },
        {
          name: "Чандмань-Өндөр сум"
        },
        {
          name: "Шинэ-Идэр сум"
        },
        {
          name: "Эрдэнэбулган сум"
        }
      ]
    },
    {
      name: "Хэнтий",
      districts: [
        {
          name: "Батноров сум"
        },
        {
          name: "Батширээт сум"
        },   
        {
          name: "Баян-Адрага сум"
        },
        {
          name: "Баянмөнх сум"
        },
        {
          name: "Баян-Овоо сум"
        },
        {
          name: "Баянхутаг сум"
        },
        {
          name: "Биндэр сум"
        },
        {
          name: "Галшар сум"
        },
        {
          name: "Дадал сум"
        },
        {
          name: "Дархан сум"
        },
        {
          name: "Дэлгэрхаан сум"
        },
        {
          name: "Жаргалтхаан сум"
        },
        {
          name: "Мөрөн сум"
        },
        {
          name: "Норовлин сум"
        },
        {
          name: "Өмнөдэлгэр сум"
        },
        {
          name: "Хэрлэн сум"
        },
        {
          name: "Цэнхэрмандал сум"
        }
      ]
    }
  ]
  
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  districts = [];
  chosenCountry: string = "";

  constructor(
   public activeModal: NgbActiveModal,
   public formBuilder: FormBuilder,
   public http: HttpClient
  ) {
    this.createForm();
    console.log(this.selectedMoment);
  }
  ngAfterViewChecked() {
    if(this.page == 'patientlist') {
      if(this.patient.addresscity != null && this.patient.addresscity != "") {
        this.chooseCountry(this.patient.addresscity);
      }
    }
  }
  ngAfterViewInit() {
    this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
    if(this.patient.therapyShownOnPicture == "") {
      let base64 = this.getImage();
      this.signaturePad.fromDataURL(base64);
    }
  } 
  createForm() {
    this.myForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }
  chooseCountry(event){
    for(let i = 0; i < this.cities.length; i++) {
      if(this.cities[i].name == event) {
        this.districts = this.cities[i].districts;
      }
    }
  }
  closeModal() {
    this.patient.therapyShownOnPicture = this.signaturePad.toDataURL();
    this.activeModal.close("close");
  }
  savePatient() {
    this.activeModal.close(this.patient);
  }
  drawClear() {
    this.signaturePad.clear();
  }
  getImage(): any {
    return this.http.get('assets/img/humanAnatomy.png', {responseType: 'text'})
    .subscribe(data => {
      console.log(data)
     });
  }
}