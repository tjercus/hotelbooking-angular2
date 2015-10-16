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
var HotelbookingServiceImpl_1 = require('../../services/HotelbookingServiceImpl');
var UserEditComponent = (function () {
    function UserEditComponent(hotelbookingService) {
        this.hotelbookingService = hotelbookingService;
        this.user = hotelbookingService.findUserById($stateParams.id);
    }
    UserEditComponent.prototype.saveUser = function () {
        this.hotelbookingService.saveUser(this.user);
    };
    UserEditComponent = __decorate([
        angular2_1.Component({
            selector: 'about',
            templateUrl: './components/user/userEdit.html',
            viewProviders: [HotelbookingServiceImpl_1.HotelbookingService],
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof HotelbookingServiceImpl_1.HotelbookingService !== 'undefined' && HotelbookingServiceImpl_1.HotelbookingService) === 'function' && _a) || Object])
    ], UserEditComponent);
    return UserEditComponent;
    var _a;
})();
exports.UserEditComponent = UserEditComponent;
//# sourceMappingURL=UserEditComponent.js.map