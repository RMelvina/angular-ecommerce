import { Component, Inject, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { DisplayCakesComponent } from '../display-cakes.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ArrayServicesService } from 'src/app/services/shareArrayService/array-services.service';
import { InfoPgComponent } from '../../info-pg/info-pg.component';

export interface DialogData {
  price: string;
  name: string;
  img: any;
  qty: any;
  description: any;
}
@Component({
  selector: 'app-add-to-cart-dialog',
  templateUrl: './add-to-cart-dialog.component.html',
  styleUrls: ['./add-to-cart-dialog.component.css'],
})
export class AddToCartDialogComponent implements OnInit {
  // Decelaration

  // Output
  




  constructor(
    private arrayS: ArrayServicesService,
    public dialogRef: MatDialogRef<DisplayCakesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  // public di: MatDialogRef<InfoPgComponent> DisplayCakesComponent
  ngOnInit(): void {
    // Disable outside dialog click and close
    this.dialogRef.disableClose = true
  }

  // Methods
  onNoClick(): void {
    //  this.arrayS.sendClickedMesg(this.dialogRef.);
    this.dialogRef.close();
    // Sending if no thanx button is clicked or not
    this.arrayS.sendClickedMesg(true);
    

    // this.arrayS.getClickedMesg().subscribe(result => {
    //   if(result == 0){
    //    alert("No Item")

    //   }

    // })
  }
}
