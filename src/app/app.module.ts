import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { ListPostsComponent } from './posts/list-posts/list-posts.component';
import { UpdatePostsComponent } from './posts/update-posts/update-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    AddPostComponent,
    ListPostsComponent,
    UpdatePostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
