import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HackatonPageRoutingModule } from './hackaton-routing.module';

import { HackatonPage } from './hackaton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HackatonPageRoutingModule
  ],
  declarations: [HackatonPage]
})
export class HackatonPageModule {}
