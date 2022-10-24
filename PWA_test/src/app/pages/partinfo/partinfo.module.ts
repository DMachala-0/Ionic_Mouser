import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartinfoPageRoutingModule } from './partinfo-routing.module';

import { PartinfoPage } from './partinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartinfoPageRoutingModule
  ],
  declarations: [PartinfoPage]
})
export class PartinfoPageModule {}
