import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public login(userInfo: User) {
    localStorage.setItem('Access_Token', 'access-token');
  }

  public isLoggedIn() {
    return localStorage.getItem('Access_Token') !==null;
  }

  public logout() {
    localStorage.removeItem('Access_Token');
    this.router.navigateByUrl('/');
  }
}
