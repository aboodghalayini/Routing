import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { CreatUserComponent } from './Component/creat-user/creat-user.component';
import { DetailComponent } from './Component/detail/detail.component';
import { HomeComponent } from './Component/home/home.component';
import { NullComponent } from './Component/null/null.component';
import { PostsComponent } from './Component/posts/posts.component';
import { UserdetailesComponent } from './Component/userdetailes/userdetailes.component';
import { UserlistComponent } from './Component/userlist/userlist.component';
import { UserReactiveFormComponent } from './Component/user-reactive-form/user-reactive-form.component';
import { PostFormComponent } from './Component/post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    CreatUserComponent,
    DetailComponent,
    HomeComponent,
    NullComponent,
    PostsComponent,
    UserdetailesComponent,
    UserlistComponent,
    UserReactiveFormComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
