import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {CommonHttpService} from '../../services/common-http.service';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {DataService} from '../../services/data.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeform:FormGroup;
  constructor(
    private fb:FormBuilder,
    private httpSrv:CommonHttpService,
    private router:Router,
    private route:ActivatedRoute,
    private dataSrv:DataService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.employeeform = this.fb.group({
      "fname":["",Validators.required],
      "lname":["",Validators.required],
      "email": ["",Validators.required],
      "city":["",Validators.required],
      "adress":["",Validators.required],
      "dob":["",Validators.required],
      "phone":["",Validators.required]
      });
  }
  get () { return this.employeeform.controls; }

  add(){
    let postData:any = {};

    postData.firstName = this.employeeform.get('fname').value;
    postData.lastName = this.employeeform.get('lname').value;
    postData.email = this.employeeform.get('email').value;
    postData.phone = this.employeeform.get('phone').value;
    postData.city = this.employeeform.get('city').value;
    postData.adress = this.employeeform.get('adress').value;
    postData.dob = this.employeeform.get('dob').value;

    this.dataSrv.addEmployee(postData).subscribe(data=>{

      this.toastr.success("New Employee Added!", "Success!");
      this.router.navigate(['/manageemp']);
      
    },error=>{
      this.toastr.error("Eroor while adding employee");
      
    })
  }


}
