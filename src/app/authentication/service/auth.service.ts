import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl;

  expiration = new Date();

  constructor(private http: HttpClient) { }

  setExpiration(data:Date){
    this.expiration = data;
  }

  login(user:User){
    return this.http.post(this.apiUrl+'/login',user);
  }

  refreshToken(){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      ContentType: 'application/json'
    });
    
    return this.http.post(this.apiUrl+'/refresh',{headers});
  }

  newUser(user:User){
    return this.http.post(this.apiUrl+'/new/user',user);
  }

  logout(){
    
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      ContentType: 'application/json'
    });

    return this.http.post(this.apiUrl+'/logout',{},{headers});
  }

  isLoggedIn(){
    const accessToken = localStorage.getItem('accessToken');
    return (
      accessToken!==null &&
      accessToken!=='' &&
      new Date()<this.expiration
    )
  }

  getAccessToken(){
    return localStorage.getItem('accessToken');
  }

  setAccessToken(accessToken:string){
    localStorage.setItem('accessToken',accessToken);
  }
}
