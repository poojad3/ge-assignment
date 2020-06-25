import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRightDrop]'
})
export class RightDropDirective {

  constructor(
    public viewContainerRef: ViewContainerRef) {
  }

}
