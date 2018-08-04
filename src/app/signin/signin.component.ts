import { Component, HostListener, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  username: string = "";
  password: string = "";
  showSpinner: boolean = false;

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  SignIn() {
    this.showSpinner = true;

    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
  }
}
