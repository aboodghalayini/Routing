import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserPreview } from '../../models/user.model'
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users:UserPreview[] | undefined;
  count : number=0;
  constructor(private user:UserService,private router:Router) { }
  ngOnInit(): void {
    this.getUsers();
  }
getUsers(){
 this.user.getUsers().subscribe(response => {this.users= response.data;});
}
createUser(){
  this.router.navigate(['user-form/','']);
}
   update(id:string,name:string){
    this.router.navigate(['user-form/',id]);
}
delete(id:string){
  this.user.delete(id).subscribe(() => this.getUsers());
  console.log('delet')
}
view(id: string){
  this.router.navigate(['user-detailes',id])
}
}
