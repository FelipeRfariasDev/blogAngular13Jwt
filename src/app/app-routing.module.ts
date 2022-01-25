import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddPostComponent } from './posts/components/add-post/add-post.component';
import { DetailPostsComponent } from './posts/components/detail-posts/detail-posts.component';
import { ListPostsComponent } from './posts/components/list-posts/list-posts.component';
import { UpdatePostsComponent } from './posts/components/update-posts/update-posts.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'list-posts', component: ListPostsComponent },
  { path: 'detail-posts', component: DetailPostsComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'update-post', component: UpdatePostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
