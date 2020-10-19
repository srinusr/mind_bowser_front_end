import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {CommonHttpService} from '../../services/common-http.service';
import { Router, ActivatedRoute } from '@angular/router';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerform:FormGroup;
  constructor(
    private fb:FormBuilder,
    private httpSrv:CommonHttpService,
    private router:Router,
    private route:ActivatedRoute,
    private toast:ToastrService
  ) { }

  ngOnInit() {
    this.registerform = this.fb.group({
      "fname":["",Validators.required],
      "lname":["",Validators.required],
      "email": ["",Validators.required],
      "password":["", Validators.required],
      "city":["",Validators.required],
      "adress":["",Validators.required],
      "dob":["",Validators.required]
      });
  }
  get f () { return this.registerform.controls; }

  register(){
    let postData:any = {};

    postData.firstName = this.registerform.get('fname').value;
    postData.lastName = this.registerform.get('lname').value;
    postData.email = this.registerform.get('email').value;
    postData.password = this.registerform.get('password').value;
    postData.city = this.registerform.get('city').value;
    postData.adress = this.registerform.get('adress').value;
    postData.dob = this.registerform.get('dob').value;

    this.httpSrv.register(postData).subscribe(data=>{
      this.toast.success("Registered new Manager");
      
      this.router.navigate(['/login']);
      
    },error=>{
      this.toast.error("Error while registering new Manager");
      
    })
  }

}
