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
  comentId?:Number; 
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
    this.postservice.addComentario(this.form.value.descricao).subscribe((response:any)=>{
      this.updateSelectedPost();
      this.form.reset();
    });
  }

  updateSelectedPost(){
    this.postservice.getPostById(this.post!.id!).subscribe((response:any)=>{
      this.postservice.setPost(response.post);
      this.post=this.postservice.getPost();
    });
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  deleteComentario(id: Number, template:TemplateRef<any>) {
    this.comentId = id;
    this.openModal(template);
  }

  confirm(): void {
    
    this.postservice.deleteComentario(this.comentId!).subscribe((response:any)=>{
      if(response.success){
        this.toastr.success(response.message,"Sucesso");
        this.updateSelectedPost();
        return;
      }
      this.toastr.error(response.message,"Erro");
    });
  
    this.modalRef?.hide();
  }
 
  decline(): void {
    this.modalRef?.hide();
  }

}
