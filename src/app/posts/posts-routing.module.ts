import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../authentication/auth.guard';
import { AddPostComponent } from './components/add-post/add-post.component';
import { DetailPostsComponent } from './components/detail-posts/detail-posts.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { UpdatePostsComponent } from './components/update-posts/update-posts.component';

const routes: Routes = [
  { path: 'list-posts', canActivate: [AuthGuard], component: ListPostsComponent },
  { path: 'detail-posts', canActivate: [AuthGuard], component: DetailPostsComponent },
  { path: 'add-post', canActivate: [AuthGuard], component: AddPostComponent },
  { path: 'update-post', canActivate: [AuthGuard], component: UpdatePostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }