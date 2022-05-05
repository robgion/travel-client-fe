import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'fin-signup-container',
  templateUrl: './signup-container.component.html',
  styleUrls: ['./signup-container.component.css']
})
export class SignupContainerComponent implements OnInit {

  currentEmail: string = "";
  insertedEmail: string = ""
  currentPassword: string = "";
  confirmPassword: string = ""
  alreadyExist: boolean = false

  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }

  completeSignupForm(signupForm: NgForm) {
    this.insertedEmail = signupForm.value.campoEmail
    this.userService.getAllUser().subscribe(
      result => {
        for (let index = 0; index < result.length; index++) {
          const user = result[index];
          console.log(user.mail)
          console.log(this.insertedEmail)
          if (user.mail === this.insertedEmail) {
            this.alreadyExist = true
            return
          }        
        }
        if (!this.alreadyExist) this.router.navigateByUrl('login/signin')
      },
      error => {
        console.log(error)
      }
    )    
  }

  ngOnInit(): void {
  }

}
