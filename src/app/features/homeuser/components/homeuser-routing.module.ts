import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeUserContainerComponent } from "./home-user-container/home-user-container.component";

//Modulo per specificare quali componenti mostrare al caricamento di /product

const routes: Routes = [
    {
        path: '',
        component: HomeUserContainerComponent
    },
    {
        path: ':id',
        component: HomeUserContainerComponent
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