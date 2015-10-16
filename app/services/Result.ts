/**
 * Return the result of an operation
 */
export class Result {
  private errorMessages:Array<string> = [];

  public hasError():boolean {
    return !(this.errorMessages.length === 0);
  }

  public getErrorMessages():string[] {
    return this.errorMessages;
  }

  public addErrorMessage(errorMessage:string):void {
    this.errorMessages.push(errorMessage);
  }
}
