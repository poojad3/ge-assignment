import { Component, ViewChild, ViewContainerRef, ChangeDetectorRef, EmbeddedViewRef, ComponentFactoryResolver, TemplateRef, AfterViewInit, OnInit, ComponentRef } from '@angular/core';
import { Poc3Service } from './poc3.service';
import { RightComponent } from './right/right.component';
import { RightDropDirective } from './right/right-drop.directive';
import { LeftDragDirective } from './left/left-drag.directive';
import { LeftComponent } from './left/left.component';

@Component({
  selector: 'app-poc3',
  templateUrl: './poc3.component.html',
  styleUrls: ['./poc3.component.styl']
})
export class Poc3Component implements AfterViewInit {

  @ViewChild(RightDropDirective, { static: true }) right: RightDropDirective;
  @ViewChild(LeftDragDirective, { static: true }) left: LeftDragDirective;


  constructor(private _componentFactoryResolver: ComponentFactoryResolver,
    private vcr: ViewContainerRef) {
  }

  ngAfterViewInit() {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(RightComponent);
    const ref = this.vcr.createComponent(componentFactory);
    ref.changeDetectorRef.detectChanges();

    const cFactory = this._componentFactoryResolver.resolveComponentFactory(LeftComponent);
    const reference = this.vcr.createComponent(cFactory);
    reference.changeDetectorRef.detectChanges();
  }

}
