import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupContainerComponent } from './components/signup-container/signup-container.component';
import { SignupRoutingModule } from './signup-routing.module';


@NgModule({
  declarations: [
    SignupContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SignupRoutingModule

  ],
  exports:[
    SignupContainerComponent
  ]
})
export class SignupModule { }
