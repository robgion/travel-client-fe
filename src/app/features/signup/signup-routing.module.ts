import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignupContainerComponent } from "./components/signup-container/signup-container.component";

const routes: Routes = [
    {
        path: '', component: SignupContainerComponent
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
export class SignupRoutingModule {

}