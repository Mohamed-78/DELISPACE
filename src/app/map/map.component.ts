import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  constructor(public modal: ModalController) { }

  ngOnInit() {}

  closeModal() {
    this.modal.dismiss();
  }

}
