import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cakes-list-item',
  templateUrl: './cakes-list-item.component.html',
  styleUrls: ['./cakes-list-item.component.css'],
})
export class CakesListItemComponent implements OnInit {
  // Declaration

  // Input
  @Input() section1 = false;
  @Input() cakeItem!: any;
  @Input() cName!: any;
  @Input() cakeItemId: any;
  @Input() isClicked: any;

  // Output
  @Output() onClickEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
