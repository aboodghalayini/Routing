import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateUser, CreateUserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-creat-user',
  templateUrl: './creat-user.component.html',
  styleUrls: ['./creat-user.component.css']
})
export class CreatUserComponent implements OnInit {

  id: any;
  user: any;
  errors: any = [];
  success = '';
  createModel: CreateUserModel = {
    firstName: '',
    lastName: '',
    email: '',
  };
  updateModel: UpdateUser = {
    title: '',
    firstName: '',
    lastName: '',
    gender: 'male',
    picture: '',
  };

  titles = ['mr', 'ms', 'mrs', 'miss', 'dr', ''];
  genders = ['male', 'female', 'other'];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userSer: UserService
  ) {
    this.activatedRoute.paramMap.subscribe(
      (params) => (this.id = params.get('id'))
    );
  }

  ngOnInit(): void {
    if (this.id)
      this.user = this.userSer.GetUserbyid(this.id).subscribe((res) => {
        this.updateModel.title = res.title;
        this.updateModel.firstName = res.firstName;
        this.updateModel.lastName = res.lastName;
        this.updateModel.gender = res.gender;
        this.updateModel.picture = res.picture;
      });
  }
  onSubmit() {
    if (this.id) {
      this.userSer.update(this.id, this.updateModel).subscribe(
        (res) => {
          this.success = 'User data Updated successfuly';
          setTimeout(() => {
            this.backToUserList();
          }, 2000);
        },
        (err) => (this.errors = err.message)
      );
    } else {
      this.userSer.createUser(this.createModel).subscribe(
        (res) => {
          this.success = 'User created successfuly';
          setTimeout(() => {
            this.backToUserList();
          }, 2000);
        },
        (err) => {
          this.errors = [];
          for (const key in err.error.data) {
            this.errors.push(err.error.data[key].replace('Path', ''));
          }
          console.log(this.errors)
        }
      );
    }
  }

  backToUserList() {
    this.router.navigate(['user']);
  }

}
