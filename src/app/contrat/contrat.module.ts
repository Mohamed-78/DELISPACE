import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContratPageRoutingModule } from './contrat-routing.module';

import { ContratPage } from './contrat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContratPageRoutingModule
  ],
  declarations: [ContratPage]
})
export class ContratPageModule {}
