import { Component } from '@angular/core';
import * as L from 'leaflet';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  map!: L.Map;
  control: any;
  places = [
    {
      "gps_lat": 5.237696386596628,
      "gps_long": -3.823134704865742,
      "name": "G1"
    },
    {
      "gps_lat": 5.235884536980122,
      "gps_long": -3.8269573132355403,
      "name": "G2"
    },
    {
      "gps_lat": 5.2217983358126485,
      "gps_long": -3.742110530741087,
      "name": "G3"
    },
    {
      "gps_lat": 5.228807203662133,
      "gps_long":- 3.804080291035579,
      "name": "G4"
    }
  ]

  constructor() {}

  ionViewDidEnter() {
    this.createMap();
    this.eventData();
  }

  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41]
  });

  eventData() {
    for (let i = 0; i < this.places.length; i++) {
      const event = this.places[i];
      const marker = L.marker([event.gps_lat, event.gps_long], { icon: this.smallIcon });
      marker.addTo(this.map).bindPopup(event.name);
    }
  }

  createMap() {
    const localisation = {
      lat: 5.2326726604552185,
      long: -3.7574536692815204,
    };

    const zoomLevel = 12;

    this.map = L.map('map', {
      center: [localisation.lat, localisation.long],
      zoom: zoomLevel
    });

     const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
       minZoom: 12,
       maxZoom: 17,
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     });

    mainLayer.addTo(this.map);

    const baselayers = {
      // Services de tuiles clasiques
      OSM: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 12,
        maxZoom: 17,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }),
      GoogleStreets: L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      }).addTo(this.map),
      GoogleHybrid: L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      })
    };

    this.control = L.control.layers(baselayers);
    this.control.addTo(this.map)
    // Echelle cartographique
    L.control.scale().addTo(this.map);
  }

}
