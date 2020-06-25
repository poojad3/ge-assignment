import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Poc3Service {

  private currentState = new BehaviorSubject<TemplateRef<any> | null>(null);
  readonly contents = this.currentState.asObservable();

  setContents(ref: TemplateRef<any>): void {
    this.currentState.next(ref);
  }

  clearContents(): void {
    this.currentState.next(null);
  }
}