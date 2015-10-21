import {AsyncTestCompleter, TestComponentBuilder, beforeEach, ddescribe, describe, el, expect, iit, inject, it, xit} from 'angular2/test_lib';
import {Component, View} from 'angular2/angular2';
import {DOM} from 'angular2/src/core/dom/dom_adapter';

import {Offer} from './Offer';
import {OffersComponent} from './OffersComponent';
import {HotelbookingServiceImpl} from '../../services/HotelbookingServiceImpl';

export function main() {
  describe('OffersComponent', () => {
    it('should work',
      inject([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
        tcb.overrideTemplate(TestComponent, '<div><offers></offers></div>')
          .createAsync(TestComponent)
          .then((rootTC) => {
            rootTC.detectChanges();

            var offersComponentInstance = rootTC.componentViewChildren[0].componentInstance;
            var componentDOMEl = rootTC.componentViewChildren[0].nativeElement;
            var listLen = function () {
              return offersComponentInstance.offers.length;
            }

            expect(offersComponentInstance.offers).toEqual(jasmine.any(HotelbookingServiceImpl.getOffers()));
            expect(listLen()).toEqual(2);
            expect(DOM.querySelectorAll(componentDOMEl, 'li').length).toEqual(listLen());

            //offersComponentInstance.addName({value: 'Minko'});
            HotelbookingServiceImpl.addOffer(new Offer('93475', 'Hotel Test', 98.98));
            rootTC.detectChanges();

            expect(listLen()).toEqual(3);
            expect(DOM.querySelectorAll(componentDOMEl, 'li').length).toEqual(listLen());

            expect(DOM.querySelectorAll(componentDOMEl, 'li')[4].textContent).toEqual('Hotel Test');

            async.done();
          });
      }));
  });
};

@Component({selector: 'offers', bindings: [HotelbookingServiceImpl]})
@View({directives: [OffersComponent]})
class TestComponent {}
