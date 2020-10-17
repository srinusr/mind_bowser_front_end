import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import {CommonHttpService} from '../services/common-http.service';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private httpSrv:CommonHttpService,
    private router:Router,
    private toast:ToastrService,
    private authSrv:AuthService
    ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authSrv.isLoggedIn()) {
        return true;
    } else {
      this.toast.error('Not Authorized to access','error');
      this.router.navigate(['/']);
      return false;
    }
  }
  
}
