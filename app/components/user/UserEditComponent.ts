import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES, EventEmitter} from 'angular2/angular2';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {User}  from './User';
import {HotelbookingServiceImpl} from '../../services/HotelbookingServiceImpl';

@Component({
  selector: 'user-edit',
  templateUrl: './components/user/userEdit.html',
  viewBindings: [HotelbookingServiceImpl],
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, FORM_DIRECTIVES],
  events: ['saveUserEventEmitter']
})
export class UserEditComponent {
  private user:User;
  private saveUserEventEmitter: EventEmitter = new EventEmitter();

  constructor(private hotelbookingService:HotelbookingServiceImpl, private params: RouteParams) {
    this.user = hotelbookingService.findUserById(params.get('id'));
  }

  saveUser() {
    this.hotelbookingService.saveUser(this.user);
    this.saveUserEventEmitter.next('user.saved');
  }
}

