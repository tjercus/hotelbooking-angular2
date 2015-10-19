import {Component, bind, bootstrap, ViewEncapsulation} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS, ROUTER_PRIMARY_COMPONENT} from 'angular2/router';
// import {HTTP_BINDINGS} from 'http/http';

import {OffersComponent} from './components/offers/OffersComponent';
import {CartComponent} from './components/cart/CartComponent';
import {RegistrationComponent} from './components/registration/RegistrationComponent';
import {UsersComponent} from './components/user/UsersComponent';

//import {HotelbookingServiceImpl} from './services/HotelbookingServiceImpl';

@Component({
  selector: 'app',
  //viewProviders: [HotelbookingService],
  templateUrl: './app.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: OffersComponent, as: 'Offers' },
  { path: '/cart', component: CartComponent, as: 'Cart' },
  { path: '/registration', component: RegistrationComponent, as: 'Registration' },
  { path: '/users', component: UsersComponent, as: 'Users' },
  { path: '/users/:id', component: UsersComponent, as: 'UserEdit' }
])
class App {}

bootstrap(App, [
  ROUTER_BINDINGS,
  bind(ROUTER_PRIMARY_COMPONENT).toValue(App)
]);
