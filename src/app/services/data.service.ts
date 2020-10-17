import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private API_SERVER = "http://localhost:8080/api/";
  getKeys = Object.keys;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private authSrv:AuthService
  ) { }
  // http headers with credentials
  getHeaders() {
    const options = { headers: {}}
    options.headers['Content-Type'] = 'application/json';
    options.headers['Authorization'] = 'Bearer'+this.authSrv.getToken();
    return options;
  }

  // api call for adding employee
  addEmployee(postData:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER+'addemployee',postData,this.getHeaders());
  }

  // api call for getting list of employees
  getEmployee():Observable<any>{
    return this.httpClient.get(this.API_SERVER+'getmployees');
  }

  // api call for deleting employee
  deleteEmployee(postData:any):Observable<any>{
    return this.httpClient.get(this.API_SERVER+'delemplyee/'+postData.empid,this.getHeaders());

  }

}
