import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangerMotDePassePageRoutingModule } from './changer-mot-de-passe-routing.module';

import { ChangerMotDePassePage } from './changer-mot-de-passe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangerMotDePassePageRoutingModule
  ],
  declarations: [ChangerMotDePassePage]
})
export class ChangerMotDePassePageModule {}
