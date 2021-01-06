import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatDialogModule } from '@angular/material/dialog';

import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    IvyCarouselModule,
    MatCardModule,
    MatDialogModule,
    
    MatInputModule,
  ],
})
export class MaterialModule {}
