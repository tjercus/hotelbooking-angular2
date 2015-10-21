import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
//import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS, ROUTER_PRIMARY_COMPONENT} from 'angular2/router';

import {User}  from '../user/User';
import {Result}  from '../../services/Result';

@Component({
  selector: 'registration',
  templateUrl: './components/registration/registration.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class RegistrationComponent {

  /**
   * Holds the names of the formparts
   * @type {Set<T>}
   */
  private formParts:Array<string> = ['person', 'contact', 'payment', 'summary'];

  /**
   * Holds the name of the formpart that is currently on view
   * @type {string}
   */
  private currentFormPart:string = this.formParts[0];

  /**
   * variable is instantiated and used by the View/Template
   */
  private user:User;

  private errorMessages:Array<string> = [];

  constructor() {
    console.log('RegistrationComponent: constructor: ' + this.currentFormPart);
    this.user = new User();
  }

  goPrevious() {
    let result:Result = this.validate();
    if (result.hasError()) {
      this.errorMessages = result.getErrorMessages();
      console.log('errorMessages: ' + this.errorMessages.length);
      return;
    } else {
      this.errorMessages = [];
    }

    let currentIndex = this.formParts.indexOf(this.currentFormPart);
    let previousPart = this.formParts[currentIndex - 1];

    if (currentIndex === 0) {
      previousPart = this.formParts[0];
    } else {
      // 2. if valid: set next current part
      console.log('goPrevious: ' + this.currentFormPart + ' to ' + previousPart);
      this.currentFormPart = previousPart;
    }
  }

  goNext() {
    // 1. validate
    let result:Result = this.validate();
    if (result.hasError()) {
      this.errorMessages = result.getErrorMessages();
      console.log('errorMessages: ' + this.errorMessages.length);
      return;
    } else {
      this.errorMessages = [];
    }

    // 2. calculate nextPart
    let currentIndex = this.formParts.indexOf(this.currentFormPart);
    let nextPart = this.formParts[currentIndex + 1];

    // 3. if last part, then show 'a thank you' alert

    if (currentIndex === this.formParts.length - 1) {
      alert('form complete');
    } else {
      // 2. if valid: set next current part
      console.log('goNext: ' + this.currentFormPart + ' to ' + nextPart);
      this.currentFormPart = nextPart;
    }
  }

  validate():Result {
    let result:Result = new Result();

    if (this.currentFormPart === 'person') {
      result = this.user.validateName();
      if (result.hasError()) {
        this.errorMessages = result.getErrorMessages();
      }
    }

    if (this.currentFormPart === 'contact') {
      result = this.user.validateEmail();
      if (result.hasError()) {
        this.errorMessages = result.getErrorMessages();
      }
    }

    return result;
  }
}

