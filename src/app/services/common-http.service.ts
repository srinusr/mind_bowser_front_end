import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {

  private PHP_API_SERVER = "http://localhost:8080/api/auth";
  getKeys = Object.keys;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { }



  getHeaders() {
    const options = { headers: {}}
    options.headers['Content-Type'] = 'application/json';
    options.headers['Access-Control-Allow-Origin'] = '*';
    options.headers["Access-Control-Allow-Credentials"] = "true";
    options.headers["Access-Control-Allow-Headers"] = "Content-Type";
    return options;
  }

  
// login api call for manager login
  login(userInfo: any): Observable<any> {
    let data = {
      email: userInfo.email,
      password: userInfo.password
    }
    console.log("before sending login", data);

    return this.httpClient.post<any>(`${this.PHP_API_SERVER}/signin`, data);
  }

  
// register api call for registering manager
  register(postData:any):Observable<any>{
    return this.httpClient.post(`${this.PHP_API_SERVER}/signup`,postData);
  }
 

}
