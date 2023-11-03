import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { 
    const firebaseConfig = {
      apiKey: "AIzaSyCWRjsek6OTHTEDXVS6rQu6uV2vdkEdQ2c",
      authDomain: "tellevoapp-c09f3.firebaseapp.com",
      projectId: "tellevoapp-c09f3",
      storageBucket: "tellevoapp-c09f3.appspot.com",
      messagingSenderId: "497921326777",
      appId: "1:497921326777:web:07152f930218dbf63b6568",
      measurementId: "G-ES3XDG7NM4"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
