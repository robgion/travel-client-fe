import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeadminContainerComponent } from "./components/homeadmin-container/homeadmin-container.component";
import { ListPacketContainerComponent } from "./components/list-packet-container/list-packet-container.component";
import { ListPrenotazioniContainerComponent } from "./components/list-prenotazioni-container/list-prenotazioni-container.component";


const routes: Routes = [
    {
        path: '',  redirectTo: 'lista-prenotazioni', pathMatch: 'full'
    },
    {
        path: 'lista-prenotazioni', component: ListPacketContainerComponent
    },
    {
        path: 'lista-pacchetti', component: ListPrenotazioniContainerComponent
    }
  ]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
}
)
export class HomeAdminRoutingModule {

}