import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeadminContainerComponent } from './homeadmin-container/homeadmin-container.component';
import { NavbarModule } from 'src/app/@template/navbar/navbar.module';
import { HomeAdminRoutingModule } from './homeadmin-routing.module';



@NgModule({
  declarations: [
    HomeadminContainerComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    HomeAdminRoutingModule
  ]
})
export class HomeadminModule { }
