import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {CommonHttpService} from '../../services/common-http.service';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  


  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private httpSrv:CommonHttpService,
    private router:Router,
    private tost:ToastrService,
    private route:ActivatedRoute,
    private authSrv:AuthService) {
    
   }

  ngOnInit() {
    this.loginForm = this.fb.group({
      "email": ["",Validators.required],
      "password":["", Validators.required]
      });
  }

  get () { return this.loginForm.controls; }
// getting the login form detauls and trimming,send values to api
  login(){
    for(let val in this.loginForm.value){
      this.loginForm.value[val] = this.loginForm.value[val].trim();
    }
    
    this.httpSrv.login(this.loginForm.value).subscribe(data => {
      console.log("data ",data);
      this.authSrv.saveToken(data.accessToken);
     this.tost.success("LoggedIn")
      
      this.router.navigate(['/manageemp']);
      
      
    }, error => {
      this.tost.error(error.error.error);
      
    })
  }

}
