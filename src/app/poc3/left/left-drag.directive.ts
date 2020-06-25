import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLeftDrag]'
})
export class LeftDragDirective {

  constructor(
    public viewContainerRef: ViewContainerRef) {
  }

}
