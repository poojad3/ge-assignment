import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.styl']
})
export class UsersComponent implements OnInit {
  data = 140;
  userDetails = [
    { name: "dummy", age: 11 },
    { name: "dummy1", age: 12 },
    { name: "dummy2", age: 13 },
    { name: "dummy3", age: 14 },
    { name: "dummy4", age: 15 },
    { name: "dummy5", age: 16 },
    { name: "dummy6", age: 17 },
    { name: "dummy7", age: 18 }
  ];
  toggleUser: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
