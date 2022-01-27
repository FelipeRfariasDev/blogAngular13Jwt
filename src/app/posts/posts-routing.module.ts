import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { DetailPostsComponent } from './components/detail-posts/detail-posts.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { UpdatePostsComponent } from './components/update-posts/update-posts.component';

const routes: Routes = [
  { path: 'list-posts', component: ListPostsComponent },
  { path: 'detail-posts', component: DetailPostsComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'update-post', component: UpdatePostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }