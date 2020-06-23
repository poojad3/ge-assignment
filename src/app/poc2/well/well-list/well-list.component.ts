import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.styl']
})
export class WellListComponent implements OnInit {
  wellList = [
    { name: "TestRSlWell01", type: "esp", sourceKey: "1023433546", },
    { name: "TestRSlWell02", type: "esp", sourceKey: "1023433546" },
    { name: "TestRSlWell03", type: "esp", sourceKey: "1023433546" },
    { name: "TestRSlWell04", type: "esp", sourceKey: "1023433546" },
    { name: "TestRSlWell05", type: "esp", sourceKey: "1023433546" },
    { name: "TestRSlWell06", type: "esp", sourceKey: "1023433546" },
    { name: "TestRSlWell07", type: "esp", sourceKey: "1023433546" },
    { name: "TestRSlWell08", type: "esp", sourceKey: "1023433546" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
