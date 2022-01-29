import { error } from '@angular/compiler/src/util';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';
import { Post } from '../../model/post';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html'
})
export class ListPostsComponent implements OnInit {

  posts: Post[] = [];

  modalRef: BsModalRef | undefined;
  post:Post|undefined;

  constructor(
    private postsService: PostsService, 
    private router: Router,
    private toastr:ToastrService,
    private modalService: BsModalService) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.postsService.getAll().subscribe((response: any) => {
      this.posts = response.posts;
    }, error => {
      if(error.error.success==false || error.error.status==403){
        localStorage.setItem('accessToken','');
        this.toastr.error(error.error.message,"Erro");
        this.router.navigate(['/']);
      }
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.postsService.delete(this.post!).subscribe((response:any)=>{
      if(response.success){
        this.getAll();
        this.toastr.success(response.message,"Sucesso");
        return;
      }
      this.toastr.error(response.message,"Erro");
    });
    this.modalRef?.hide();
  }
 
  decline(): void {
    this.modalRef?.hide();
  }
  
  goToDetails(post: Post) {
    this.postsService.setPost(post);
    this.router.navigate(['/detail-posts']);
  }

  goToEdit(post: Post) {
    this.postsService.setPost(post);
    this.router.navigate(['/update-post']);
  }

  delete(post: Post, template:TemplateRef<any>) {
    this.post = post;
    this.openModal(template);
  }
}
