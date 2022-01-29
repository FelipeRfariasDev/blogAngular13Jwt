import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiUrl : string = environment.apiUrl;

  selectedPost:Post | undefined;
  constructor(private http: HttpClient) {}

  setPost(post:Post){
    this.selectedPost = post;
  }

  getPost(){
    return this.selectedPost;
  }

  getAll(){

    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      ContentType: 'application/json'
    });
    
    return this.http.get(this.apiUrl+"/posts",{headers});
  }

  getFind(Id:Number){

    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      ContentType: 'application/json'
    });

    return this.http.get(this.apiUrl+"/posts/"+Id,{headers});
  }

  post(post:Post){
    
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      ContentType: 'application/json'
    });
    
    return this.http.post(this.apiUrl+'/posts',post,{headers});
  }
  
  put(post:Post){

    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      ContentType: 'application/json'
    });

    return this.http.put(this.apiUrl+'/posts',post,{headers});
  }

  delete(post:Post){

    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      ContentType: 'application/json'
    });

    return this.http.delete(this.apiUrl+'/posts/'+post.id,{headers});
  }
}
