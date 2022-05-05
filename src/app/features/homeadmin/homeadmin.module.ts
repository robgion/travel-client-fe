import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeadminContainerComponent } from './homeadmin-container/homeadmin-container.component';
import { NavbarModule } from 'src/app/@template/navbar/navbar.module';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '', component: HomeadminContainerComponent
  }
]

@NgModule({
  declarations: [
    HomeadminContainerComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ]
})
export class HomeadminModule { }
