import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeUserContainerComponent } from "./home-user-container/home-user-container.component";
import { PacketDetailComponent } from "./packet-detail/packet-detail.component";

//Modulo per specificare quali componenti mostrare al caricamento di /product

const routes: Routes = [
    {
        path: '',
        component: HomeUserContainerComponent
    },
    {
        path: ':user_id',
        component: HomeUserContainerComponent
    },
    {
        path:':user_id/:packet_id',
        component:PacketDetailComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class HomeUserRoutingModule {

}