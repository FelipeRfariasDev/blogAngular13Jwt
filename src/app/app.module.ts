import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { ListPostsComponent } from './posts/list-posts/list-posts.component';
import { UpdatePostsComponent } from './posts/update-posts/update-posts.component';
import { PostsService } from './posts/_service/posts.service';
import { DetailPostsComponent } from './posts/detail-posts/detail-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    AddPostComponent,
    ListPostsComponent,
    UpdatePostsComponent,
    DetailPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
