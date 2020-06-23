import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.styl']
})
export class WellListComponent {
  showWell: boolean = false;
  sourceKeyClicked: string;
  wellList = [
    { name: "TestRSlWell01", type: "esp", sourceKey: "1023433546", },
    { name: "TestRSlWell02", type: "esp", sourceKey: "1023433546" },
    { name: "TestRSlWell03", type: "esp", sourceKey: "1023433546" },
    { name: "TestRSlWell04", type: "dep", sourceKey: "1023433546" },
    { name: "TestRSlWell05", type: "esp", sourceKey: "1023433546" },
    { name: "TestRSlWell06", type: "dep", sourceKey: "1023433546" },
    { name: "TestRSlWell07", type: "esp", sourceKey: "1023433546" },
    { name: "TestRSlWell08", type: "esp", sourceKey: "1023433546" }
  ];

  constructor(private router: Router) { }

  addNewWellCmp() {
    this.showWell = true;
  }

  getSourceKey(evt) {
    this.showWell = true;
    this.sourceKeyClicked = evt.target.innerHTML;
  }

  addNewWell(evt) {
    this.showWell = true;
    this.wellList.push(evt);
  }

}
