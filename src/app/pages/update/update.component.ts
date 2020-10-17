import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {CommonHttpService} from '../../services/common-http.service';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {DataService} from '../../services/data.service';
import {ToastrService} from 'ngx-toastr';
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateform:FormGroup;
  @Input('data') data;
  formObj:object = {};
  constructor(
    private fb:FormBuilder,
    private httpSrv:CommonHttpService,
    private router:Router,
    private route:ActivatedRoute,
    private dataSrv:DataService,
    private toastr: ToastrService
  ) { }
  ngOnInit() {
    console.log("jaffa",this.data);
    let keys = Object.keys(this.data);
    keys.forEach(key=>{
      console.log("key",key);
      this.formObj[key] = new FormControl(this.data[key],Validators.required);
  });
  this.updateform= this.fb.group(this.formObj);
  // this.updateform = this.fb.group({
  //   "fname":["",Validators.required],
  //   "lname":["",Validators.required],
  //   "email": ["",Validators.required],
  //   "password":["", Validators.required],
  //   "city":["",Validators.required],
  //   "adress":["",Validators.required],
  //   "dob":["",Validators.required],
  //   "phone":["",Validators.required]
  //   });
}
get () { return this.updateform.controls; }

add(){
  let postData:any = {};

  postData.firstName = this.updateform.get('firstName').value;
  postData.lastName = this.updateform.get('lastName').value;
  postData.email = this.updateform.get('email').value;
  postData.phone = this.updateform.get('phone').value;
  postData.city = this.updateform.get('city').value;
  postData.adress = this.updateform.get('adress').value;
  postData.dob = this.updateform.get('dob').value;
  postData.empid = this.updateform.get('empid').value;

  this.dataSrv.addEmployee(postData).subscribe(data=>{

    
    this.toastr.success("Updated!", "Success!");
    window.location.reload();
    
    
  },error=>{
    
    this.toastr.error("Eroor while adding employee");
    
  })
}

}
