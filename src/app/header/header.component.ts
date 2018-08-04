import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuItems: any[];
  title: string = "App";
  constructor() {
    this.menuItems = [
      {link: '/', name: 'Sign In'},
      {link: '/', name: 'Sign Up'}
    ];
  }
  homepage() {

  }
}