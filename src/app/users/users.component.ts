import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';
import { UserService } from '../providers/user.service';
import { Router } from '@angular/router';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  user: User;
  users = USERS;
  editMode = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user = new User();
    this.editMode = this.router.url.includes('edit');
    this.getUser();
    console.log('edit mode', this.editMode);
  }

  getUser() {
    this.userService.getUser().subscribe(
      res => {
        this.user = res;
      },
      error => {
        console.log('getUser error: ', error);
      }
    );
  }

  save() {
    console.log(this.user);
    this.userService.updateUser(this.user).subscribe(
      res => {
        console.log('user updated');
      },
      error => console.log('updateUser error: ', error)
    );
  }
}
