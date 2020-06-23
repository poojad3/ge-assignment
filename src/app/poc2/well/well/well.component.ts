import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.styl']
})
export class WellComponent implements OnInit {
  @ViewChild('name') public name;
  @ViewChild('name') public type;
  @ViewChild('name') public sourceKey;
  wellData;
  @Output() public wellObject = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addWell() {
    this.wellData = {
      name: this.name.nativeElement.value,
      type: this.type.nativeElement.value,
      sourceKey: this.sourceKey.nativeElement.value
    }
    this.wellObject.emit(this.wellData);
    console.log("Add Well");
    console.log(this.wellData);
  }

}
