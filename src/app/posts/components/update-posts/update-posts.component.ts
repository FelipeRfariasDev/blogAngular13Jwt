import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../../model/post';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-update-posts',
  templateUrl: './update-posts.component.html'
})
export class UpdatePostsComponent implements OnInit {

  post?:Post;

  form = new FormGroup({});

  constructor(private postservice: PostsService, private router:Router) { 
    this.post = postservice.getPost();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      id:new FormControl(this.post?.id),
      titulo:new FormControl(this.post?.titulo),
      descricao:new FormControl(this.post?.descricao)
    });
  }

  put(){
    this.postservice.put(this.form.value).subscribe(response=>{
      console.log(response);
    });
  }

}
