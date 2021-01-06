import { Component, Inject, OnInit } from '@angular/core';
import {DisplayCakesComponent} from '../display-cakes.component'
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ArrayServicesService } from 'src/app/services/shareArrayService/array-services.service';
import {InfoPgComponent} from '../../info-pg/info-pg.component'

export interface DialogData {
  price: string;
  name: string;
  img: any;
  qty: any;
  description:any
}
@Component({
  selector: 'app-add-to-cart-dialog',
  templateUrl: './add-to-cart-dialog.component.html',
  styleUrls: ['./add-to-cart-dialog.component.css'],
})
export class AddToCartDialogComponent implements OnInit {
  // Decelaration
  // qyt:any

  constructor(
    private arrayS: ArrayServicesService,
    public dialogRef: MatDialogRef<DisplayCakesComponent>,

    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  // public di: MatDialogRef<InfoPgComponent> DisplayCakesComponent
  ngOnInit(): void {}

  // Methods
  onNoClick(): void {
    this.dialogRef.close();
    
  }
}
