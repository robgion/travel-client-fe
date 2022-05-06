import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUserContainerComponent } from './components/home-user-container/home-user-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeUserRoutingModule } from './components/homeuser-routing.module';
import { PacketDetailComponent } from './components/packet-detail/packet-detail.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeUserContainerComponent,
    PacketDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeUserRoutingModule,
    FormsModule
  ]
})
export class HomeuserModule { }
