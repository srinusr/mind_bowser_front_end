import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AddEmployeeComponent} from './pages/add-employee/add-employee.component';
import {ManageEmployeeComponent} from './pages/manage-employee/manage-employee.component'
import {AuthGuard} from './guards/auth.guard';
import {RegisterComponent} from './components/register/register.component';

const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:'login'},
  {path:'login',component:LoginComponent},
  {path:'newemp',component:AddEmployeeComponent,canActivate:[AuthGuard]},
  {path:'manageemp',component:ManageEmployeeComponent,canActivate:[AuthGuard]},
  {path:'signup',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
