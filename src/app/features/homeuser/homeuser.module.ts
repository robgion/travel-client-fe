import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUserContainerComponent } from './components/home-user-container/home-user-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeUserRoutingModule } from './components/homeuser-routing.module';



@NgModule({
  declarations: [
    HomeUserContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeUserRoutingModule
  ]
})
export class HomeuserModule { }
