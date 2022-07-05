import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { CreatUserComponent } from './Component/creat-user/creat-user.component';
import { DetailComponent } from './Component/detail/detail.component';
import { HomeComponent } from './Component/home/home.component';
import { NullComponent } from './Component/null/null.component';
import { PostsComponent } from './Component/posts/posts.component';
import { UserdetailesComponent } from './Component/userdetailes/userdetailes.component';
import { UserlistComponent } from './Component/userlist/userlist.component';

const routes: Routes = [
  
  {path:'home' , component :HomeComponent},
  {path:'user',component:UserlistComponent},
  {path:'creat-user/:id' , component:CreatUserComponent},
  {path:'about-us',component:AboutUsComponent},
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
