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
var router_1 = require('angular2/router');
var OffersComponent_1 = require('./components/offers/OffersComponent');
var CartComponent_1 = require('./components/cart/CartComponent');
var RegistrationComponent_1 = require('./components/registration/RegistrationComponent');
var UsersComponent_1 = require('./components/user/UsersComponent');
var UserEditComponent_1 = require('./components/user/UserEditComponent');
var HotelbookingServiceImpl_1 = require('./services/HotelbookingServiceImpl');
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            viewProviders: [HotelbookingServiceImpl_1.HotelbookingService],
            templateUrl: './app.html',
            encapsulation: angular2_1.ViewEncapsulation.None,
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', component: OffersComponent_1.OffersComponent, as: 'offers' },
            { path: '/cart', component: CartComponent_1.CartComponent, as: 'cart' },
            { path: '/registration', component: RegistrationComponent_1.RegistrationComponent, as: 'registration' },
            { path: '/users', component: UsersComponent_1.UsersComponent, as: 'users' },
            { path: '/users/:id/edit', component: UserEditComponent_1.UserEditComponent, as: 'user.edit' }
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [
    router_1.ROUTER_BINDINGS,
    angular2_1.bind(router_1.ROUTER_PRIMARY_COMPONENT).toValue(App)
]);
//# sourceMappingURL=app.js.map