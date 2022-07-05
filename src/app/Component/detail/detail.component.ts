import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserFull, UserPreview } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  user?:UserFull;
  id:string='';
    constructor(private route:ActivatedRoute,private users:UserService,private  router:Router) { }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe(pram => {this.id=pram.get('id') || ''; console.log(this.id)});
      this.users.GetUserbyid(this.id).subscribe(Response=>this.user=Response);
    }
}
