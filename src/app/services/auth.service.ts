import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   TOKEN_KEY = 'auth-token';

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

    // saving auth token in session storage

  public saveToken(token: string) {
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.setItem(this.TOKEN_KEY, token);
    console.log("storage in login",this.getToken());
  }

  public getToken(): string {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(){
   return sessionStorage.getItem(this.TOKEN_KEY)?true:false;
  }
  
  logout() {

    console.log("removed username", sessionStorage.removeItem('auth-token'));
    this.router.navigate(['/']);
  }
}
