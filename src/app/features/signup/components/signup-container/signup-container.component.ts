import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'fin-signup-container',
  templateUrl: './signup-container.component.html',
  styleUrls: ['./signup-container.component.css']
})
export class SignupContainerComponent implements OnInit {

  currentEmail:string="";
  currentPassword:string="";
  constructor() {
   }
  
  completeSignupForm(signupForm:NgForm) {
    
  }

  ngOnInit(): void {
  }

}
