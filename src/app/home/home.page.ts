import { Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
}) 
export class HomePage {
  public map: mapboxgl.Map;
  public style = 'mapbox://styles/mapbox/light-v11';
  @ViewChild('asGeoCoder') asGeoCoder: ElementRef;
  constructor(private renderer2: Renderer2) {
    this.asGeoCoder = null!;
    this.map = null!;
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = 'pk.eyJ1Ijoib3MyNnJvbWV1IiwiYSI6ImNsbWZ0ZTduMDA4Y3gzc2xsd2xlaDV0bGoifQ.DgpMlL9vhYiUj9BrUjgYOg';
  }

  ngOnInit(): void {
    this.buildMap()
    .then(({geocoder, map}) => {
      this.renderer2.appendChild(this.asGeoCoder.nativeElement,
        geocoder.onAdd(map)
      );
      console.log('*** TODO BIEN *****');
    })
    .catch((err) => {
      console.log('******* ERROR ******', err);
    });
  }

  buildMap(): Promise<any>{
    return new Promise((resolve, rejects) => {
      this.map = new mapboxgl.Map({
        container: 'mapa',
        style: this.style,
        zoom: 10,
        center: [
          -70.66980339619825,
          -33.447868790011995
        ]
      });
      this.map.addControl(new mapboxgl.NavigationControl())

      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl
      });

      geocoder.on('result', ($event) => {
        console.log('*********', $event)
      })

      resolve({
        map: this.map,
        geocoder
      })
    });
  }

}
