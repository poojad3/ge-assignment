import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.styl']
})
export class LeftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

}
