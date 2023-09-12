import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public map: mapboxgl.Map;
  public style = 'mapbox://styles/mapbox/streets-v11';

  constructor() {
    this.map = null!;
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = 'pk.eyJ1Ijoib3MyNnJvbWV1IiwiYSI6ImNsbWZ0ZTduMDA4Y3gzc2xsd2xlaDV0bGoifQ.DgpMlL9vhYiUj9BrUjgYOg';
  }

  ngOnInit(){
    this.buildMap();
  }

  buildMap(){
    this.map = new mapboxgl.Map({
      container: 'mapa-box',
      style: this.style,
      zoom: 14,
      center: [
        -99.2064496,
        19.4050906
      ]
    });
  }

}
