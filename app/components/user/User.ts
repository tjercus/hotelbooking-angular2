
import {Result}  from '../../services/Result';

export enum Gender {Male, Female}
export enum State {ZH, NH, ZE, UT}

export class User {
  public  state:State;
  public  gender:Gender;

  public  phone:number;
  public  creditcard:number;

  public constructor(public id?:string, public name?:string, public email?:string) {
  }

  public validateName():Result {
    let result = new Result();
    if (this.name === undefined || this.name === null || this.name === '' && this.name.length === 0) {
      result.addErrorMessage('name is required');
    }
    return result;
  }

  public validateEmail():Result {
    let result = new Result();
    if (this.email === undefined || this.email === null) {
      result.addErrorMessage('email is required');
    } else if (this.email.indexOf('@') === -1) {
      result.addErrorMessage('email pattern is not ok');
    }
    return result;
  }

  public setId(value:string) {
    this.id = value;
  }

  public setName(value:string) {
    this.name = value;
  }

  public setState(value:State) {
    this.state = value;
  }

  public setGender(value:Gender) {
    this.gender = value;
  }

  public setEmail(value:string) {
    this.email = value;
  }

  public setPhone(value:number) {
    this.phone = value;
  }

  public setCreditcard(value:number) {
    this.creditcard = value;
  }
}

