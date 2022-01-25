import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../model/post';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-detail-posts',
  templateUrl: './detail-posts.component.html'
})
export class DetailPostsComponent implements OnInit {

  post?:Post;

  constructor(private postservice: PostsService, private router:Router) { 
    this.post = postservice.getPost();
  }

  ngOnInit(): void {
  }

}
