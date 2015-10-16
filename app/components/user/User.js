(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(exports.Gender || (exports.Gender = {}));
var Gender = exports.Gender;
(function (State) {
    State[State["ZH"] = 0] = "ZH";
    State[State["NH"] = 1] = "NH";
    State[State["ZE"] = 2] = "ZE";
    State[State["UT"] = 3] = "UT";
})(exports.State || (exports.State = {}));
var State = exports.State;
var User = (function () {
    function User(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    User.prototype.validateName = function () {
        var result = new Result();
        if (this.name === undefined || this.name === null || this.name === "" && this.name.length === 0) {
            result.addErrorMessage("name is required");
        }
        return result;
    };
    User.prototype.validateEmail = function () {
        var result = new Result();
        if (this.email === undefined || this.email === null) {
            result.addErrorMessage("email is required");
        }
        else if (this.email.indexOf("@") === -1) {
            result.addErrorMessage("email pattern is not ok");
        }
        return result;
    };
    User.prototype.setId = function (value) {
        this.id = value;
    };
    User.prototype.setName = function (value) {
        this.name = value;
    };
    User.prototype.setState = function (value) {
        this.state = value;
    };
    User.prototype.setGender = function (value) {
        this.gender = value;
    };
    User.prototype.setEmail = function (value) {
        this.email = value;
    };
    User.prototype.setPhone = function (value) {
        this.phone = value;
    };
    User.prototype.setCreditcard = function (value) {
        this.creditcard = value;
    };
    return User;
})();
exports.User = User;
//# sourceMappingURL=User.js.map