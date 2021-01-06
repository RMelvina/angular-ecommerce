import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css'],
})
export class CartItemsComponent implements OnInit {
  // Declaration

  // Input
  @Input() product!: any;
  @Input() displayItems = false;
  @Input() displayCloseIcon = false;
  @Input() value!: any;
  @Input() total!: any;
  // Output
  @Output() close = new EventEmitter();
  @Output() add = new EventEmitter();
  @Output() min = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
