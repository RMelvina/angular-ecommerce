import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { list1 } from '../../models/items';
import { products } from '../../models/items';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AddToCartDialogComponent } from '../display-cakes/add-to-cart-dialog/add-to-cart-dialog.component';
import {ArrayServicesService} from '../../services/shareArrayService/array-services.service'


@Component({
  selector: 'app-info-pg',
  templateUrl: './info-pg.component.html',
  styleUrls: ['./info-pg.component.css'],
})
export class InfoPgComponent implements OnInit {
  // Declaration
  product: any;
  qty = 0;

  // Output
  // @Output() addToCart = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private arrayS: ArrayServicesService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      return (this.product = products[+params.get('cakeItemId')!]);
    });
  }

  // Methods
  addToCart(name: any, price: any, img: any) {
     this.openDialogBox(name, img, price);
     
   
  }

  openDialogBox(name: any, img: any, price: any): void {
    const dialogRef = this.dialog.open(AddToCartDialogComponent, {
      width: '250px',
      data: { name: name, price: price, img: img, qty: this.qty },
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      this.qty = result;
      const array = [name, img, price, this.qty];

      if (this.qty > 0) {
        this.arrayS.sendMsg(array);
      }
      this.qty = 0;

      console.log(array);
    });
  }
}
