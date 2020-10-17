import { Component, OnInit } from '@angular/core';

import {DataService} from '../../services/data.service';
import {NgbModal, ModalDismissReasons,NgbModalOptions,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {UpdateComponent} from '../update/update.component';
import {ToastrService} from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent implements OnInit {
data:any;
closeResult = '';
  constructor(private dataSrv:DataService,private modalService: NgbModal,private toast:ToastrService,private router:Router) { }

  ngOnInit() {
    // getting the all employee list from dataservice
    this.dataSrv.getEmployee().subscribe(data=>{
      this.data = data;
    })
  }

// openening update user details in  popup and sending employee details to modal
open(data:any){
  const modalref =  this.modalService.open(UpdateComponent,{size:'md'});
  modalref.componentInstance.data = data;
  
}
// deleting eployee record using id
delete(id:any){
  console.log("id",id);
  let postdata:any = {};
  postdata.empid = id;
  this.dataSrv.deleteEmployee(postdata).subscribe(data=>{
    this.toast.success("Deleted!");
    window.location.reload();

  },error=>{
    console.log("error while delete",error);
    
  })
}
}
