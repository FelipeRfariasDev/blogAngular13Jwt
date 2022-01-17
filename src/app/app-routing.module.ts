import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { ListPostsComponent } from './posts/list-posts/list-posts.component';
import { UpdatePostsComponent } from './posts/update-posts/update-posts.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'posts', component: ListPostsComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'update-post', component: UpdatePostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
