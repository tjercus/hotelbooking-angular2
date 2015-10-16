import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
//import {RouterLink, RouteConfig, Router, Route, RouterOutlet, Location, RouteParams} from 'angular2/router';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {User}  from './User';
import {HotelbookingServiceImpl} from '../../services/HotelbookingServiceImpl';

@Component({
  selector: 'about',
  templateUrl: './components/user/userEdit.html',
  viewBindings: [HotelbookingServiceImpl],
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class UserEditComponent {
  private user:User;

  constructor(private hotelbookingService:HotelbookingServiceImpl, private params: RouteParams) {
    // TODO how to get id from router
    this.user = hotelbookingService.findUserById(params.get('id'));
  }

  saveUser() {
    this.hotelbookingService.saveUser(this.user);
    // TODO use eventEmitter of EventBus
    //this.$rootScope.$broadcast("user.saved");
  }
}

