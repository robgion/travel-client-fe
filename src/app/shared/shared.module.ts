import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ButtonComponent } from './components/button/button.component';
import { ListItemsComponent } from './components/list-items/list-items.component';



@NgModule({
  declarations: [
    TextInputComponent,
    ButtonComponent,
    ListItemsComponent
  ], 
  imports: [
    CommonModule
  ],
  exports:[
    TextInputComponent,
    ButtonComponent,
    ListItemsComponent
  ]
})
export class SharedModule { }
