import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html'
})
export class AddPostComponent implements OnInit {

  form = new FormGroup({
    titulo:new FormControl('',Validators.required),
    descricao:new FormControl('',Validators.required)
  });

  constructor(private postservice: PostsService, private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  add(){
    this.postservice.post(this.form.value).subscribe((response:any)=>{
      if(response.success){
        this.router.navigateByUrl('/list-posts');
        this.toastr.success(response.message,"Sucesso");
        return;
      }
      this.toastr.error(response.message,"Erro");
    });
  }

}
