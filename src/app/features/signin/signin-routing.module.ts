import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SigninContainerComponent } from "./signin-container/signin-container.component";

const routes: Routes = [
    {
        path: '', component: SigninContainerComponent
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