import { Injectable } from '@angular/core';

import { Preferences } from '@capacitor/preferences';

export const INTRO_KEY = 'intro-slides';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setStorage(key:any , value:any){
    return Preferences.set({
      key,
      value
    });
  }

  getStorage(key:any){
    return Preferences.get({key});
  }

  removeStorage(key:any) {
    return Preferences.remove({key});
  }

}
