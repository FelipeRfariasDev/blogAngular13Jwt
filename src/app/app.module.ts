import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { Interceptor } from './interceptor';
import { MenuComponent } from './menu/menu.component';
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    PostsModule,
    AuthenticationModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:Interceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
