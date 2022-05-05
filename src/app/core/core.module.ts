import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service'
import { CheckUserService } from './services/checkuser.service'
import { PacketService } from './services/packet.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  providers: [ UserService, PacketService, CheckUserService ]
})
export class CoreModule { }
