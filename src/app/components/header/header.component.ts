import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from '../../services/common-http.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private httpSrv:CommonHttpService,private authSrv:AuthService) {
  }

 ngOnInit() {
 }
 isLoggedIn(){
   return this.authSrv.isLoggedIn();
 }
 logout(){
   this.authSrv.logout();
 }

}
