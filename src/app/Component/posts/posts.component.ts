import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPreview } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:PostPreview[]=[];
  id :any;
  constructor(private route:ActivatedRoute,private users:UserService,private  router:Router,private post:PostService) {
    this.route.paramMap.subscribe(p=>this.id=p.get('id'))
  }
  ngOnInit(): void {
    this.getposts();
  }
  update(id:string,text:string){
    this.post.update(id, text).subscribe(Response => {this.getposts()});
 }
 createpost(){
  this.post.createpost({
    text: 'assadsad', image: '', owner: this.id,
    likes: 0,
    tags: []
  }).subscribe(() =>{console.log('created post');this.getposts();});
 }
 getposts(){
  this.post.getpost().subscribe(response => {this.posts= response.data;});
}
 delete(id:string){
  this.post.delete(id).subscribe(() => this.getposts());
  console.log('delet')
}
}
