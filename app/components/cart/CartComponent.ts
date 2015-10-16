import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {Offer} from '../offers/Offer';
import {HotelbookingServiceImpl} from '../../services/HotelbookingServiceImpl';

@Component({
  selector: 'cart',
  templateUrl: './components/cart/cart.html',
  viewBindings: [HotelbookingServiceImpl],
  directives: [CORE_DIRECTIVES]
})
export class CartComponent {
  private cart:Offer[] = [];
  private amount:number = 0;

  constructor(private hotelbookingService:HotelbookingServiceImpl) {
    // need to use this.$scope.cart since it a two-way binding
    this.cart = hotelbookingService.getCart();

    // do not need to use this.$scope.amount since it a one-way binding
    this.amount = hotelbookingService.getCartAmount();
    console.log('CartComponent constructor, cart size: ' + this.cart.length);
  }

  removeOfferFromCart(offer:Offer):void {
    this.cart = this.hotelbookingService.removeOfferFromCart(offer);
    this.amount = this.hotelbookingService.getCartAmount();
  }

  pay():void {
    alert('pay up! ' + this.amount);
  }

  // TODO update view when a state receives an onEnter event
  //  preferably not with $scope.watch
}

