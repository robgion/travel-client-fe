import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SignupContainerComponent } from './components/signup-container/signup-container.component';

const routes: Routes = [
  {
    path:'', component: SignupContainerComponent
  }
]

@NgModule({
  declarations: [
    SignupContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    SignupContainerComponent
  ]
})
export class SignupModule { }
