import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RegistroDashboardComponent } from './registro-dashboard/registro-dashboard.component';

const routes: Routes = [
  {path :'',redirectTo:'login',pathMatch:'full'},
  {path : 'login', component:LoginComponent},
  {path :'signup',component:SignupComponent},
  {path :'dashboard',component:RegistroDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
