import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-detail-posts',
  templateUrl: './detail-posts.component.html'
})
export class DetailPostsComponent implements OnInit {

  post?:Post;

  constructor(private postservice: PostsService) { 
    this.post = postservice.getPost();
  }

  ngOnInit(): void {
  }

}
