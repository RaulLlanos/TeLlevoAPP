// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  //API DE MAPBOX
  mapPk: 'pk.eyJ1Ijoib3MyNnJvbWV1IiwiYSI6ImNsbWZ0ZTduMDA4Y3gzc2xsd2xlaDV0bGoifQ.DgpMlL9vhYiUj9BrUjgYOg',

  //API DE FIREBASE
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCWRjsek6OTHTEDXVS6rQu6uV2vdkEdQ2c",
    authDomain: "tellevoapp-c09f3.firebaseapp.com",
    projectId: "tellevoapp-c09f3",
    storageBucket: "tellevoapp-c09f3.appspot.com",
    messagingSenderId: "497921326777",
    appId: "1:497921326777:web:07152f930218dbf63b6568",
    measurementId: "G-ES3XDG7NM4"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
