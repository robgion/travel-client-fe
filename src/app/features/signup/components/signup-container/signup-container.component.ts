import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'fin-signup-container',
  templateUrl: './signup-container.component.html',
  styleUrls: ['./signup-container.component.css']
})
export class SignupContainerComponent implements OnInit {

  currentEmail:string="";
  currentPassword:string="";
  constructor(
    private router: Router
  ) {
   }
  
  completeSignupForm(signupForm:NgForm) {
    this.router.navigateByUrl('signin')
  }

  ngOnInit(): void {
  }

}
