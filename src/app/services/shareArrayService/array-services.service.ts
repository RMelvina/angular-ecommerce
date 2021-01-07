import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ApiProducts} from '../../models/products'

@Injectable({
  providedIn: 'root',
})
export class ArrayServicesService {
  subject = new Subject();
  cartCount = new Subject();
  cartCountZero = new Subject();
  productDetails = new Subject();
  observable = new Observable();

  constructor(private httpClient: HttpClient) {}

  items = [] as any;

  productD: any[] = [];

  addItems(items: any) {
    return this.items.push(items);
  }

  getAllItems() {
    return this.items;
  }

  sendMsg(product: any) {
    this.subject.next(product); //Triggering an event
  }
  getMsg(): Observable<any> {
    return this.subject.asObservable();
  }

  sendproductDetailsMesg(productD: any) {
    this.productDetails.next(productD);
  }
  getproductDetailsMesg(): Observable<any> {
    return this.productDetails.asObservable();
  }

  sendCartItemMesg(cartCount: any) {
    this.cartCount.next(cartCount);
  }

  sentClearCartMesg(cartCountZero: any) {
    this.cartCountZero.next(cartCountZero);
  }
  getCartCountZeroMsg(): Observable<any>{
    return this.cartCountZero.asObservable();
  }

  getCartItemMesg(): Observable<any> {
    return this.cartCount.asObservable();
  }

  // Geting http request from the server
  getApiRequest() {
    return this.httpClient.get<ApiProducts[]>(
      'https://fakestoreapi.com/products'
    );
    // Observable<any>
  }
}

