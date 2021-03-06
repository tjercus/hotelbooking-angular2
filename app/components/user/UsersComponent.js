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
var User_1 = require('./User');
var HotelbookingServiceImpl_1 = require('../../services/HotelbookingServiceImpl');
var UsersController = (function () {
    function UsersController(hotelbookingService) {
        this.hotelbookingService = hotelbookingService;
        this.users = [];
        console.log("UsersControler.constructor");
        this.users = hotelbookingService.getUsers();
        if (this.users.length === 0) {
            console.log("UsersController re-loading users from fixed array");
            this.users.push(new User_1.User("sdf345743598", "Tjerk Valentijn", "tjerk@example.org"));
            this.users.push(new User_1.User("9458kdgj94856", "Rudi Mackenzie", "king@montival.com"));
            hotelbookingService.putUsers(this.users);
        }
        else {
            console.log("UsersController not reloading users");
        }
    }
    UsersController = __decorate([
        angular2_1.Component({
            selector: 'about',
            templateUrl: './components/user/userEdit.html',
            viewProviders: [HotelbookingServiceImpl_1.HotelbookingService],
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof HotelbookingServiceImpl_1.HotelbookingService !== 'undefined' && HotelbookingServiceImpl_1.HotelbookingService) === 'function' && _a) || Object])
    ], UsersController);
    return UsersController;
    var _a;
})();
exports.UsersController = UsersController;
//# sourceMappingURL=UsersComponent.js.map