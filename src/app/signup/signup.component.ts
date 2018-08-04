import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: string = "";
  email: string = "";
  firstname: string = "";
  lastname: string = "";
  password: string = "";
  confirmpassword: string = "";
  showSpinner: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  SignUp() {
    this.showSpinner = true;

    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
  }

}
