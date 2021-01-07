import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { arrayItems } from '../../models/items';

import { ArrayServicesService } from '../../services/shareArrayService/array-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // Declaration
  navbarItems = arrayItems;
  showNavbar: any;
  clicked = false;
  isCartNum = false;
  icon1 = 'fa fa-times';
  icon2 = 'fa fa-bars';
  cartIconShow = 'fa fa-shopping-cart cartIcon ';
  customCartNum: any;
  customCartNumStyle = 'customCartNumStyle';
  isStyle: any;

  cIcon: any;
  items: any;

  // Outputs()
  @Output() openCart = new EventEmitter();

  // Input

  // Array
  arrayCount = [] as any;

  // -------------------
  constructor(private cartCount: ArrayServicesService) {}

  ngOnInit() {
    if (!this.showNavbar) {
      this.showNavbar = this.icon2;
    }
    this.cIcon = this.cartIconShow;

    this.cartCount.getCartItemMesg().subscribe((items: any) => {
      console.log('show count ' + items);
      
      if (items == 0) {
         this.arrayCount.length = 0;
         this.customCartNum = 0;
       } else{
        this.showCount(items);
       }
      
    });
  }
  // -------------------

  // Methods customCartNumStyle
  openNavbar() {
    this.clicked = !this.clicked;
    this.showNavbar = this.clicked ? this.icon1 : this.icon2;
  }

  showCount(items: any) {

    // Adds items from the get cart mesg
    this.arrayCount.push({
      pName: items[0],
      pImg: items[1],
      pPrice: items[2],
      pQty: items[3],
    });

    var count = this.arrayCount.length;
    
    // If the count of the array is not 0 than update the cart number
    if (count != 0) {
       this.customCartNum = count;
       this.isStyle = this.customCartNumStyle;
     }

    //  if (this.arrayCount.includes(items[0])) {
    //    console.log('Name is there ' +  );
    //  } else {
    //    console.log('Not there');
    //  }

    //  if (this.arrayCount.includes(items[0])) {
    //      this.customCartNum = count = 0 + 1;
    //      console.log("Included")
    //    }

    //   for (let i in this.arrayCount) {
    //   if(count != 0){
    //    if (this.arrayCount[i].includes(items[0])) {
    //      this.customCartNum = count = 0 + 1;
    //    }

    //   }
    // }

    // if (!isAdded) {
    //    this.customCartNum = count;
    //    this.isStyle = this.customCartNumStyle;
    //   if (count != 0) {
    // this.customCartNum = count;
    // this.isStyle = this.customCartNumStyle;
    //   }
    // }

    // }else{
    //  if (count != 0) {
    //    this.customCartNum = count;
    //    this.isStyle = this.customCartNumStyle;
    //  }
    // }

    // console.log('Counting ' + this.arrayCount[i][0]);
  }

  // for (let i in this.arrayCount) {
  //   if (this.arrayCount[i].title) {
  //     if (count != 0) {
  //       this.customCartNum = count;
  //       this.isStyle = this.customCartNumStyle;
  //     }
  //   }
  // }
}
