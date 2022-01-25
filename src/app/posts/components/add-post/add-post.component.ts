import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html'
})
export class AddPostComponent implements OnInit {

  form = new FormGroup({
    titulo:new FormControl(''),
    descricao:new FormControl('')
  });

  constructor(private postservice: PostsService, private router:Router) { }

  ngOnInit(): void {
  }

  add(){
    this.postservice.post(this.form.value).subscribe(response=>{
      console.log(response);
      this.router.navigateByUrl('/list-posts');
    });
  }

}
