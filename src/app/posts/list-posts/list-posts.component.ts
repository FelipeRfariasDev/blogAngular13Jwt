import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html'
})
export class ListPostsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    /*
    this.postService.getAll().subscribe( data:any => {
  
      this.posts = data;
    }, error => {
      alert("erro");
    });*/
  }
}
