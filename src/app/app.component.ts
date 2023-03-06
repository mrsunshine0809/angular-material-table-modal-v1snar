import { Component } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  users;
  images;

  selectedUser;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);

    this.userService.getImages()
      .subscribe(images => this.images = images);
  }

  showInfo(user) {
    this.selectedUser = user;
    console.log(this.selectedUser);
  }

}
