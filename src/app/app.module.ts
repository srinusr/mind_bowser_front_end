import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ManageEmployeeComponent } from './pages/manage-employee/manage-employee.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import {ToastrModule} from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UpdateComponent } from './pages/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ManageEmployeeComponent,
    AddEmployeeComponent,
    RegisterComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UpdateComponent],
})
export class AppModule { }
