import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePgComponent } from './components/home-pg/home-pg.component';
import { InfoPgComponent } from './components/info-pg/info-pg.component';
import { ContactPgComponent } from './components/contact-pg/contact-pg.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutPgComponent } from './components/about-pg/about-pg.component';
import { DisplayCakesComponent } from './components/display-cakes/display-cakes.component';
import { CakesListItemComponent } from './components/display-cakes/cakes-list-item/cakes-list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { NavbarItemsComponent } from './components/navbar/navbar-items/navbar-items.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemsComponent } from './components/cart/cart-items/cart-items.component';
import { AddToCartDialogComponent } from './components/display-cakes/add-to-cart-dialog/add-to-cart-dialog.component';
import { InfoAddToCartDialogComponent } from './components/info-pg/info-add-to-cart-dialog/info-add-to-cart-dialog.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomePgComponent,
    InfoPgComponent,
    ContactPgComponent,
    NavbarComponent,
    AboutPgComponent,
    DisplayCakesComponent,
    CakesListItemComponent,
    NavbarItemsComponent,
    CartComponent,
    CartItemsComponent,
    AddToCartDialogComponent,
    InfoAddToCartDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,

    RouterModule.forRoot([
      { path: '', component: HomePgComponent },
      { path: 'home', component: HomePgComponent },
      { path: 'info/:cakeItemId', component: InfoPgComponent },
      { path: 'about', component: AboutPgComponent },
      { path: 'contact', component: ContactPgComponent },
      { path: 'display-cakes', component: DisplayCakesComponent },
     
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
