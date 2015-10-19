import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {RouterLink, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {User}  from './User';
import {HotelbookingServiceImpl} from '../../services/HotelbookingServiceImpl';
import {UserEditComponent}  from './UserEditComponent';

@Component({
  selector: 'users',
  templateUrl: './components/user/users.html',
  viewBindings: [HotelbookingServiceImpl],
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, FORM_DIRECTIVES, RouterLink, UserEditComponent]
})

export class UsersComponent {
  private users:Array<User> = [];

  constructor(private hotelbookingService:HotelbookingServiceImpl, private params:RouteParams) {
    console.log('UsersControler.constructor');

    this.users = hotelbookingService.getUsers();
    if (this.users.length === 0) {
      console.log('UsersController re-loading users from fixed array');
      this.users.push(new User('sdf345743598', 'Tjerk Valentijn', 'tjerk@example.org'));
      this.users.push(new User('9458kdgj94856', 'Rudi Mackenzie', 'king@montival.com'));
      hotelbookingService.putUsers(this.users);
    } else {
      console.log('UsersController not reloading users');
    }
  }

  onUpdate(event) {
    console.log('parent (UsersComponent) caught event passed by child (UserEditComponent): ' + event.value);
    this.users = this.hotelbookingService.getUsers();
  }
}

