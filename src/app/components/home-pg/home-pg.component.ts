import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-pg',
  templateUrl: './home-pg.component.html',
  styleUrls: ['./home-pg.component.css'],
})
export class HomePgComponent implements OnInit {
  // Declaration
  mainTitle = `Welcome to the  Cakeshop`;
  url = 'displayCakes';
  btnTitle = 'Explore';
  // --------------
  constructor() {}

  ngOnInit(): void {}
  // ----------------
}
