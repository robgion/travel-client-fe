import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeadminContainerComponent } from "./components/homeadmin-container/homeadmin-container.component";


const routes: Routes = [
    {
        path: '', component: HomeadminContainerComponent
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