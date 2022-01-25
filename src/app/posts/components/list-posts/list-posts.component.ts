import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Post } from '../../model/post';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html'
})
export class ListPostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postsService: PostsService, private router: Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.postsService.getAll().subscribe((response: any) => {
      this.posts = response.posts;
    });
  }

  goToDetails(post: Post) {
    this.postsService.setPost(post);
    this.router.navigate(['/detail-posts']);
  }

  goToEdit(post: Post) {
    this.postsService.setPost(post);
    this.router.navigate(['/update-post']);
  }

  delete(post: Post) {
    this.postsService.delete(post).subscribe((response:any)=>{
      if(response.success){
        this.getAll();
        this.toastr.success(response.message,"Sucesso");
        return;
      }
      this.toastr.error(response.message,"Erro");
    });
  }
}
