import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninContainerComponent } from './signin-container/signin-container.component';
import { SignupRoutingModule } from './signin-routing.module';



@NgModule({
  declarations: [
    SigninContainerComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule
  ]
})
export class SigninModule { }
