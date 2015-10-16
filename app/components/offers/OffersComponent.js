var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Offer_1 = require('./Offer');
var HotelbookingServiceImpl_1 = require('../../services/HotelbookingServiceImpl');
var OffersComponent = (function () {
    function OffersComponent(hotelbookingService) {
        this.hotelbookingService = hotelbookingService;
        this.offers = [];
        if (this.offers.length === 0) {
            this.offers.push(new Offer_1.Offer("1", "Hotel New York", 34.95));
            this.offers.push(new Offer_1.Offer("2", "Hostel Hospitable Amsterdam", 12.95));
            hotelbookingService.putOffers(this.offers);
        }
        this.offers = hotelbookingService.getOffers();
    }
    OffersComponent.prototype.addOfferToCart = function (offer) {
        console.log("OffersComponent adding " + offer.name + ", for " + offer.price);
        this.hotelbookingService.addOfferToCart(offer);
    };
    OffersComponent = __decorate([
        angular2_1.Component({
            selector: 'about',
            templateUrl: './components/offers/offers.html',
            viewProviders: [HotelbookingServiceImpl_1.HotelbookingService],
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof HotelbookingServiceImpl_1.HotelbookingService !== 'undefined' && HotelbookingServiceImpl_1.HotelbookingService) === 'function' && _a) || Object])
    ], OffersComponent);
    return OffersComponent;
    var _a;
})();
exports.OffersComponent = OffersComponent;
//# sourceMappingURL=OffersComponent.js.map