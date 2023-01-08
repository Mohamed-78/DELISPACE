import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalCtrl: ModalController) {}

  async openMap() {
    const modal = await this.modalCtrl.create({
      component: MapComponent,
      cssClass: 'transparent-modal',
    });
    modal.present();
  }

}
