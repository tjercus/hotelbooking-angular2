import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
//import {RouterLink, RouteConfig, Router, Route, RouterOutlet, Location, RouteParams} from 'angular2/router';
import {RouterLink} from 'angular2/router';

import {User}  from './User';
import {HotelbookingServiceImpl} from '../../services/HotelbookingServiceImpl';

@Component({
  selector: 'about',
  templateUrl: './components/user/userEdit.html',
  viewBindings: [HotelbookingServiceImpl],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, RouterLink]
})

export class UsersComponent {
  private users:Array<User> = [];

  constructor(private hotelbookingService:HotelbookingServiceImpl) {
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

    // TODO fix
    //this.$rootScope.$on('user.saved', () => {
    //  console.log('caught user.saved event');
    //  this.users = this.hotelbookingService.getUsers();
    //});
  }
}

