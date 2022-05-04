import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SignupContainerComponent } from './components/signup-container/signup-container.component';



@NgModule({
  declarations: [
    SignupContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SignupModule { }
