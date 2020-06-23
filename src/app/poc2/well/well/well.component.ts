import { Component, OnInit, ViewChild, Output, EventEmitter, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.styl']
})
export class WellComponent implements OnChanges {
  @ViewChild('name') public name;
  @ViewChild('type') public type;
  @ViewChild('sourceKey') public sourceKey;
  wellData;
  @Output() public newWellItem = new EventEmitter();
  @Input('sourceValue') public sourceValue;
  @ViewChild('myForm') public myForm;
  disableSource: boolean = false;
  constructor() {
    if (this.sourceValue) {
      console.log(this.myForm);
      this.disableSource = true;
    }
  }

  ngOnChanges() {
    // this.name.nativeElement.value = this.sourceValue;
    if (this.sourceValue) {
      this.disableSource = true;
    }
  }

  addWell() {
    this.wellData = {
      name: this.name.nativeElement.value,
      type: this.type.nativeElement.value,
      sourceKey: this.sourceKey.nativeElement.value
    }
    if ((this.wellData.name && this.wellData.type && this.wellData.sourceKey) != "") {
      this.newWellItem.emit(this.wellData);
    }
  }
}
