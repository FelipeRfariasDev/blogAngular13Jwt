import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Post } from '../../model/post';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-detail-posts',
  templateUrl: './detail-posts.component.html'
})
export class DetailPostsComponent implements OnInit {

  post?:Post;
  modalRef: BsModalRef | undefined;

  form = new FormGroup({
    descricao: new FormControl('', Validators.required)
  });

  constructor(private postservice: PostsService,
    private router: Router,
    private toastr:ToastrService,
    private modalService: BsModalService) { 
    this.post = postservice.getPost();
  }

  ngOnInit(): void {
  }

  addComentario(){
    alert("adicionar um comentário");
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  deleteComentario(comentario: any, template:TemplateRef<any>) {
    this.openModal(template);
  }

  confirm(): void {
    /*
    this.postsService.delete(this.post!).subscribe((response:any)=>{
      if(response.success){
        this.getPagesList(this.link_page_atual);
        this.toastr.success(response.message,"Sucesso");
        return;
      }
      this.toastr.error(response.message,"Erro");
    });
    
    */
    this.modalRef?.hide();
  }
 
  decline(): void {
    this.modalRef?.hide();
  }

}
