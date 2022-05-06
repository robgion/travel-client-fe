import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ButtonComponent } from './components/button/button.component';
import { ListPacketsComponent } from './components/list-packets/list-packets.component';



@NgModule({
  declarations: [
    TextInputComponent,
    ButtonComponent,
    ListPacketsComponent
  ], 
  imports: [
    CommonModule
  ],
  exports:[
    TextInputComponent,
    ButtonComponent,
    ListPacketsComponent
  ]
})
export class SharedModule { }
