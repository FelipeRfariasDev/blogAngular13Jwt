import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from '../app-routing.module';
import { AddPostComponent } from './components/add-post/add-post.component';
import { DetailPostsComponent } from './components/detail-posts/detail-posts.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { UpdatePostsComponent } from './components/update-posts/update-posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsService } from './service/posts.service';

@NgModule({
  declarations: [
    AddPostComponent,
    ListPostsComponent,
    UpdatePostsComponent,
    DetailPostsComponent
  ],
  imports: [
    PostsRoutingModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [PostsService]
})
export class PostsModule { }
