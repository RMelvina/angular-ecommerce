import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { products } from 'src/app/models/items';

import { ArrayServicesService } from '../../services/shareArrayService/array-services.service';

interface Users {
  name: string;
  age: string;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // Declaration
  products: any;
  value = 1;
  total = 0;
  subTotal = 0;
  validate: any;
  isAdded!: boolean;
  checkOutName: any;
  checkOutTotal: any;
  showTotal: any;
  showCheckOutInfo: any;

  // Output
  @Output() close = new EventEmitter();

  // Array
  productsList = [] as any;
  totals = [] as any;

  constructor(private arrayS: ArrayServicesService) {}

  // @ViewChild('btnD', { static: true }) private paypalRef:
  //   | ElementRef
  //   | undefined;

  ngOnInit() {
    this.showTotal = true;
    // -------
    // console.log(window.paypal);
    //  Paypal button
    // window.paypal
    //   .Buttons({
    //     style: {
    //       layout: 'horizontal',
    //     },
    //     createOrder: (data: any, actions: any) => {
    //       return actions.order.create({
    //         purchase_units: [
    //           {
    //             description: 'Good to eat',
    //             amount: {
    //               value: this.total,
    //             },
    //           },
    //         ],
    //       });
    //     },
    //     onApprove: (data: any, action: any) => {
    //       return action.order.capture();
    //     },
    //   })
    //   .render(this.paypalRef?.nativeElement);
    // // --------------

    // Works when the buy button is clicked
    this.arrayS.getMsg().subscribe((items) => {
      this.addToCart(items);
      this.checkTotal();
    });
  }

  // Methods
  add(product: any) {
    product.qty++;
    this.checkTotal();
  }

  min(product: any) {
    if (product.qty > 0) {
      product.qty--;
      this.checkTotal();
    }
  }

  checkTotal() {
    let totalAmount = 0;

    this.productsList.forEach((item: any) => {
      item.subTotal = item.pPrice * item.qty;
      totalAmount += item.pPrice * item.qty;
    });

    this.total = totalAmount;
    console.log(totalAmount);
  }

  addToCart(items: any) {
    // let isAdded = false;
    this.isAdded = false;

    //Looping through the array to check the name of the cake
    for (let i in this.productsList) {
      // Checking if the cake name is already in the cart
      if (this.productsList[i].pName == items[0]) {
        // If is is than avoiding adding another cake with the same name only allowing
        // the quantity to increase
        this.productsList[i].qty++;
        // Setting the isAdded variable to true which means the product is already added
        //  to the cart
        this.isAdded = true;
        break;
      }
    }
    //  Checking if there is any product in the cart with same name as the adding product
    if (!this.isAdded) {
      // If not than adding the product to the cart
      this.productsList.push({
        pName: items[0],
        pImg: items[1],
        pPrice: items[2],
        subTotal: 0,
        qty: 1,
      });

      // Sending the length number of the cart to update the cart number
      this.arrayS.sendCartItemMesg(items);
    }
  }

  checkoutBtn() {
    var itemName = this.productsList[0].pName;
    var itemTotal = this.total;

    // console.log('Your item is: ' + name + ' \n ' + 'your total is: ' + this.total);
    this.checkOutName = itemName;
    this.checkOutTotal = itemTotal;
    this.showCheckOutInfo = true;
    this.showTotal = false;
    this.clearCart();

    // console.log(this.productsList[0].pName);
  }

  clearCart() {
    var count = (this.productsList.length = 0);
    this.total = 0;
    this.arrayS.sendCartItemMesg(count);
  }
}
