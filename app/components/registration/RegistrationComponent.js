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
var RegistrationComponent = (function () {
    function RegistrationComponent() {
        this.formParts = ["person", "contact", "payment", "summary"];
        this.currentFormPart = this.formParts[0];
        this.errorMessages = [];
        console.log("RegistrationController: constructor: " + this.currentFormPart);
        this.user = new user.User();
    }
    RegistrationComponent.prototype.goPrevious = function () {
        var result = this.validate();
        if (result.hasError()) {
            this.errorMessages = result.getErrorMessages();
            console.log("errorMessages: " + this.errorMessages.length);
            return;
        }
        else {
            this.errorMessages = [];
        }
        var currentIndex = this.formParts.indexOf(this.currentFormPart);
        var previousPart = this.formParts[currentIndex - 1];
        if (currentIndex === 0) {
            previousPart = this.formParts[0];
        }
        else {
            console.log("goPrevious: " + this.currentFormPart + " to " + previousPart);
            this.currentFormPart = previousPart;
        }
    };
    RegistrationComponent.prototype.goNext = function () {
        var result = this.validate();
        if (result.hasError()) {
            this.errorMessages = result.getErrorMessages();
            console.log("errorMessages: " + this.errorMessages.length);
            return;
        }
        else {
            this.errorMessages = [];
        }
        var currentIndex = this.formParts.indexOf(this.currentFormPart);
        var nextPart = this.formParts[currentIndex + 1];
        if (currentIndex === this.formParts.length - 1) {
            alert("form complete");
        }
        else {
            console.log("goNext: " + this.currentFormPart + " to " + nextPart);
            this.currentFormPart = nextPart;
        }
    };
    RegistrationComponent.prototype.validate = function () {
        var result = new Result();
        if (this.currentFormPart === "person") {
            result = this.user.validateName();
            if (result.hasError()) {
                this.errorMessages = result.getErrorMessages();
            }
        }
        if (this.currentFormPart === "contact") {
            result = this.user.validateEmail();
            if (result.hasError()) {
                this.errorMessages = result.getErrorMessages();
            }
        }
        return result;
    };
    RegistrationComponent = __decorate([
        angular2_1.Component({
            selector: 'registration',
            templateUrl: './components/registration/registration.html',
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], RegistrationComponent);
    return RegistrationComponent;
})();
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=RegistrationComponent.js.map