import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Inject,
} from '@angular/core';
import { products } from '../../models/items';
import { ActivatedRoute } from '@angular/router';
import { ArrayServicesService } from '../../services/shareArrayService/array-services.service';
import { AddToCartDialogComponent } from './add-to-cart-dialog/add-to-cart-dialog.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ApiProducts } from '../../models/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-cakes',
  templateUrl: './display-cakes.component.html',
  styleUrls: ['./display-cakes.component.css'],
})
export class DisplayCakesComponent implements OnInit {
  // Array to store all the cakes
  cakesItems = products;
  // productsList: any[] = [];
  // productsList!: ApiProducts[];

  product: any;
  isClick = true;
  disabled: any;
  btnClicked: any;
  dis = 'disabled';
  shoppingCartIcon = 'shoppingCartIcon';
  description = 'hello';
  qty = 0;
  dialogRef: any;

  // Array
  p: any[] = [];
  // Input

  // Output
  // @Output() onClickEvent = new EventEmitter();

  // -------------
  constructor(
    private arrayS: ArrayServicesService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getDataFromArray();
    this.arrayS.getClickedMesg().subscribe(result => {
      this.btnClicked = result;
    })
  }
  // -------------
  // Methods

  buyBtn(name: any, img: any, price: any) {
    this.openDialogBox(name, img, price);
  }

  openDialogBox(name: any, img: any, price: any): void {
   
    this.dialogRef = this.dialog.open(AddToCartDialogComponent, {
      // width: '250px',
      data: {
        name: name,
        price: price,
        img: img,
        qty: this.qty,
        description: this.description,
      },
    });

    this.dialogRef.afterClosed().subscribe((result: any) => {
      this.qty = result;
      
      const array = [name, img, price, this.qty];
      console.log(array);

      
      // If the qty is more than 0 
      if (this.qty > 0) {
        // Than send it to the cart with send mesg
        this.arrayS.sendMsg(array);
        // If the no thanx btn is clicked is true
      } else if (this.btnClicked) {
        // Than show this mesg
        this.btnClicked = !this.btnClicked
        console.log("I am closed")
      } else {
        // Other wise show this mesg
        alert('Quantity cannot be 0');
      }
      
      // else {
        

      //   alert('Quantity cannot be 0');
      // }

      // After closing the dialog box set the qty back to 0
      this.qty = 0;

      console.log(array);
    });
  }

  

  getDataFromArray() {
    for (let i in this.cakesItems) {
      var getD = this.cakesItems[i].description;
      this.description = getD;
    }
  }
  // API CALL PRATICE METHODS

  // -----------------------
}
