import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  list = [
    {
      name: "Livraison",
      value: false
    },
    {
      name: "Démenagement",
      value: false
    }
  ]

  public toggled: boolean = false;
  constructor(public modalCtrl: ModalController) {}

  async openMap() {
    const modal = await this.modalCtrl.create({
      component: MapComponent,
      cssClass: 'transparent-modal',
    });
    modal.present();
  }

  public toggle(): void {
    this.toggled = !this.toggled;
  }

  selection(name: string) {
    this.list.forEach(x => {
      if (x.name !== name) {
        x.value = !x.value
      }
      else if(x.name !== 'Livraison'){
        this.toggle();
      }
    });
  }

}
