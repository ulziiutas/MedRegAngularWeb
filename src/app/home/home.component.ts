import { Component, HostListener, OnInit, ElementRef, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('home') homeElRef: ElementRef;
  @ViewChild('ourservice') ourserviceElRef: ElementRef;
  @ViewChild('ourtimetable') ourtimetableElRef: ElementRef;
  @ViewChild('ourcontact') ourcontactElRef: ElementRef;

  lat: number = 51.678418;
  lng: number = 7.809007;
  backgroundHeader: string = "none";

  
  constructor(
    public el: ElementRef,
    public route: ActivatedRoute
  ) {
    
    this.route.params.subscribe( params => {
      if(params != undefined) {
        if(params.id == 'home') {
          this.homeElRef.nativeElement.scrollIntoView();
        } else if(params.id == 'ourservice') {
          this.ourserviceElRef.nativeElement.scrollIntoView();
        }  else if(params.id == 'ourtimetable') {
          this.ourtimetableElRef.nativeElement.scrollIntoView();
        }  else if(params.id == 'ourcontact') {
          this.ourcontactElRef.nativeElement.scrollIntoView();
        } 
      }
    });
   }
  ngDoCheck() {
    this.route.params.subscribe( params => {
      if(params != undefined) {
        if(params.id == 'home') {
          this.homeElRef.nativeElement.scrollIntoView();
        } else if(params.id == 'ourservice') {
          this.ourserviceElRef.nativeElement.scrollIntoView();
        }  else if(params.id == 'ourtimetable') {
          this.ourtimetableElRef.nativeElement.scrollIntoView();
        }  else if(params.id == 'ourcontact') {
          this.ourcontactElRef.nativeElement.scrollIntoView();
        } 
      }
    });    
  }
  ngOnInit() {
    this.route.params.subscribe( params => {
      if(params != undefined) {
        if(params.id == 'home') {
          this.homeElRef.nativeElement.scrollIntoView();
        } else if(params.id == 'ourservice') {
          this.ourserviceElRef.nativeElement.scrollIntoView();
        }  else if(params.id == 'ourtimetable') {
          this.ourtimetableElRef.nativeElement.scrollIntoView();
        }  else if(params.id == 'ourcontact') {
          this.ourcontactElRef.nativeElement.scrollIntoView();
        } 
      }
    });
  }
  scroll(el) {
    el.scrollIntoView();
  }
  @HostListener('window:scroll', ['$event'])
    checkScroll() {      
      const scrollPosition = window.pageYOffset
      
      console.log(scrollPosition);
      if (scrollPosition >= 50) {
        this.backgroundHeader = "rgba(132,166,205,.6)";
      } else {

        this.backgroundHeader = "none";        
      }
    }
}
