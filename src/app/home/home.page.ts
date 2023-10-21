import { Component, ElementRef, Renderer2, ViewChild, EventEmitter} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cbAddress:EventEmitter<any> = new EventEmitter<any>();
  public map: mapboxgl.Map;
  public style = 'mapbox://styles/mapbox/light-v11';
  @ViewChild('asGeoCoder') asGeoCoder: ElementRef;
  modeInput = 'start';
  wayPoints: WayPoints = {start:null, end:null};
  user:any

  constructor(
    private renderer2: Renderer2,
    public authService: AuthService,
    public route: Router,
    ) {
    this.asGeoCoder = null!;
    this.map = null!;
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = 'pk.eyJ1Ijoib3MyNnJvbWV1IiwiYSI6ImNsbWZ0ZTduMDA4Y3gzc2xsd2xlaDV0bGoifQ.DgpMlL9vhYiUj9BrUjgYOg';
    this.user = authService.getProfile()
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

    this.cbAddress.subscribe((getPoint) => {
      if(this.modeInput === 'start'){
        this.wayPoints.start = getPoint;
      }
      if(this.modeInput === 'end'){
        this.wayPoints.end = getPoint;
      }
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
        const {result} = $event;
        geocoder.clear();
        console.log('*********', result)
        this.cbAddress.emit(result);
      })

      resolve({
        map: this.map,
        geocoder
      })
    });
  }
  state:any;
  email: any;

  loadCoords(coords: number[][]): void{
    console.log('--------------->', coords)
    const url = [
      `https://api.mapbox.com/directions/v5/mapbox/driving/`,
      `${coords[0][0]},${coords[0][1]};${coords[1][0]},${coords[1][1]}`,
      `?steps=true&geometries=geojson&acces_token=${environment.mapPk}`,
    ].join('');

    console.log('**********', url)
  }

  drawRoute(): void{
    console.log('Puntos de origen y destino', this.wayPoints)
    const coords = [
      this.wayPoints.start.center,
      this.wayPoints.end.center
    ];

    this.loadCoords(coords);
  }

  changeMode(mode:string):void{
    this.modeInput = mode;
  }
  async logout(){
    this.authService.signOut().then(()=>{
      this.route.navigate(['/landing'])
    }).catch((error)=>{
      console.log(error);
    })
  }

}

export class WayPoints{
  start:any;
  end:any;
}
