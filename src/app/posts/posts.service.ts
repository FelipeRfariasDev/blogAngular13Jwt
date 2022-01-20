import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './posts';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  ObjPost : Posts | undefined;
  apiUrl : string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get(this.apiUrl+"/posts");
  }

  getFind(Id:BigInt){
    return this.http.get(this.apiUrl+"/posts/"+Id);
  }

  post(post:Posts){}
  
  put(post:Posts){}

  delete(Id:BigInt){}
}
