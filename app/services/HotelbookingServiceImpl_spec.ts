import {HotelbookingServiceImpl} from './HotelbookingServiceImpl';
import {Offer} from '../components/offers/Offer';

export function main() {
  describe('HotelbookingService', () => {
    let service;

    beforeEach(() => {
      service = new HotelbookingServiceImpl();
      service.addOffer(new Offer('1', 'Hotel New York', 34.95));
    });

    it('should return a list of offers', () => {
      let offers = service.getOffers();
      expect(offers).toEqual(jasmine.any(Array));
    });
  });
}
