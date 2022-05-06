import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HomeadminContainerComponent } from './components/homeadmin-container/homeadmin-container.component';
import { NavbarModule } from 'src/app/@template/navbar/navbar.module';
import { HomeAdminRoutingModule } from './homeadmin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HomeadminContainerComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    HomeAdminRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class HomeadminModule { }
