import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { DetailComponent } from './Component/detail/detail.component';
import { HomeComponent } from './Component/home/home.component';
import { NullComponent } from './Component/null/null.component';
import { PostFormComponent } from './Component/post-form/post-form.component';
import { PostsComponent } from './Component/posts/posts.component';
import { UserReactiveFormComponent } from './Component/user-reactive-form/user-reactive-form.component';
import { UserdetailesComponent } from './Component/userdetailes/userdetailes.component';
import { UserlistComponent } from './Component/userlist/userlist.component';

const routes: Routes = [
  
  {path:'home' , component :HomeComponent},
  {path:'user',component:UserlistComponent},
  { path: 'user-form/:id', component: UserReactiveFormComponent },
  { path: 'user-form', component: UserReactiveFormComponent },
  {path:'about-us',component:AboutUsComponent},
  { path: 'post-form/:uId/:pId', component: PostFormComponent },
  { path: 'post-form/:uId', component: PostFormComponent },
  {path:'user-detailes/:id',component:UserdetailesComponent,
  children:[
    {
      path:'post/:id',component:PostsComponent
    },
    {
      path:'detail/:id',component:DetailComponent
    }
  ],},
  {path:'' , redirectTo: '/home',pathMatch: 'full'},
  {path:'**' , component:NullComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
