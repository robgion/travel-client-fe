import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
  path: '', redirectTo: 'signin', pathMatch: 'full'
},

{
  path:'signin', loadChildren: () => import('./features/signin/signin.module')
  .then(m => m.SigninModule)
},

{
  path:'signup', loadChildren: () => import('./features/signup/signup.module')
  .then(m => m.SignupModule)
}

,
{
  path:'homeuser', loadChildren: () => import('./features/homeuser/homeuser.module')
  .then(m => m.HomeuserModule)
},

{
  path:'homeadmin', loadChildren: () => import('./features/homeadmin/homeadmin.module')
  .then(m => m.HomeadminModule)
},


]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
