import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {Offer} from './Offer';
import {HotelbookingServiceImpl} from '../../services/HotelbookingServiceImpl';

@Component({
  selector: 'about',
  templateUrl: './components/offers/offers.html',
  viewBindings: [HotelbookingServiceImpl],
  directives: [CORE_DIRECTIVES]
})
export class OffersComponent {

  private offers:Offer[] = [];

  constructor(private hotelbookingService:HotelbookingServiceImpl) {

    if (this.offers.length === 0) {
      this.offers.push(new Offer('1', 'Hotel New York', 34.95));
      this.offers.push(new Offer('2', 'Hostel Hospitable Amsterdam', 12.95));
      hotelbookingService.putOffers(this.offers);
    }
    this.offers = hotelbookingService.getOffers();
  }

  addOfferToCart(offer:Offer) {
    console.log('OffersComponent adding ' + offer.name + ', for ' + offer.price);
    this.hotelbookingService.addOfferToCart(offer);
  }
}

