var HotelbookingServiceImpl = (function () {
    function HotelbookingServiceImpl() {
        this.STORAGE_ID = 'hotelbooking';
    }
    HotelbookingServiceImpl.prototype.getOffers = function () {
        return JSON.parse(localStorage.getItem(this.STORAGE_ID + "_offers") || '[]');
    };
    HotelbookingServiceImpl.prototype.putOffers = function (offers) {
        localStorage.setItem(this.STORAGE_ID + "_offers", JSON.stringify(offers));
    };
    HotelbookingServiceImpl.prototype.addOffer = function (offer) {
        var offers = this.getOffers();
        offers.push(offer);
        this.putOffers(offers);
    };
    HotelbookingServiceImpl.prototype.getCart = function () {
        return JSON.parse(localStorage.getItem(this.STORAGE_ID + "_cart") || '[]');
    };
    HotelbookingServiceImpl.prototype.putCart = function (cart) {
        localStorage.setItem(this.STORAGE_ID + "_cart", JSON.stringify(cart));
    };
    HotelbookingServiceImpl.prototype.addOfferToCart = function (offer) {
        var cart = this.getCart();
        cart.push(offer);
        this.putCart(cart);
    };
    HotelbookingServiceImpl.prototype.getCartAmount = function () {
        var amount = 0.0;
        this.getCart().map(function (offer) { return amount += offer.price; });
        return amount;
    };
    HotelbookingServiceImpl.prototype.removeOfferFromCart = function (offer) {
        var cart = this.getCart();
        for (var i = 0, len = cart.length; i < len; i++) {
            if (cart[i].id != undefined && cart[i].id === offer.id) {
                cart.splice(i, 1);
                this.putCart(cart);
                return cart;
            }
        }
        return cart;
    };
    HotelbookingServiceImpl.prototype.getUsers = function () {
        return JSON.parse(localStorage.getItem(this.STORAGE_ID + "_users") || '[]');
    };
    HotelbookingServiceImpl.prototype.putUsers = function (users) {
        localStorage.setItem(this.STORAGE_ID + "_users", JSON.stringify(users));
    };
    HotelbookingServiceImpl.prototype.findUserById = function (id) {
        var users = this.getUsers();
        for (var _i = 0; _i < users.length; _i++) {
            var user = users[_i];
            if (user.id === id) {
                return user;
            }
        }
        return null;
    };
    HotelbookingServiceImpl.prototype.saveUser = function (user) {
        var users = this.getUsers();
        for (var i = 0, len = users.length; i < len; i++) {
            console.log("users: " + users.length);
            var _user = users[i];
            if (_user.id === user.id) {
                console.log("user found with id " + _user.id);
                users[i] = user;
                break;
            }
            console.log("user not found with id " + _user.id);
        }
        this.putUsers(users);
    };
    return HotelbookingServiceImpl;
})();
exports.HotelbookingServiceImpl = HotelbookingServiceImpl;
//# sourceMappingURL=HotelbookingServiceImpl.js.map