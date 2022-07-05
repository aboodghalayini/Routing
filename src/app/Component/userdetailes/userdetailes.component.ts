import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-userdetailes',
  templateUrl: './userdetailes.component.html',
  styleUrls: ['./userdetailes.component.css']
})
export class UserdetailesComponent implements OnInit {

  id:any;
  constructor(private route:ActivatedRoute,private users:UserService,private  router:Router,private post:PostService) { }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe(pram => {this.id=pram.get('id') || ''; console.log(this.id)});
      if(this.id){
            this.router.navigate([`user-detailes/${this.id}/post/${this.id}`])
      }
    }
    back(){
    this.router.navigate(['user']);
    }
    gopost(){
    this.router.navigate([`user-detailes/${this.id}/post/${this.id}`]);
    }
    godetail(){
      this.router.navigate([`user-detailes/${this.id}/detail/${this.id}`]);
    }
}
