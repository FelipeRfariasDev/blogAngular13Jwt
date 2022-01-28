import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router:Router) { }

  login(user:User){
    return this.http.post(this.apiUrl+'/login',user);
  }

  isLoggedIn(){
    const accessToken = localStorage.getItem('accessToken');
    return (
      accessToken!==null &&
      accessToken!==''
    )
  }

  getAccessToken(){
    return localStorage.getItem('accessToken');
  }

  setAccessToken(accessToken:string){
    localStorage.setItem('accessToken',accessToken);
  }
}
