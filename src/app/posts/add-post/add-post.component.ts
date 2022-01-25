import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from '../_service/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html'
})
export class AddPostComponent implements OnInit {

  form = new FormGroup({
    titulo:new FormControl(''),
    descricao:new FormControl('')
  });

  constructor(private postservice: PostsService) { }

  ngOnInit(): void {
  }

  add(){
    this.postservice.post(this.form.value).subscribe(response=>{
      console.log(response);
    });
  }

}
