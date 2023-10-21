import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { INTRO_KEY, StorageService } from '../services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class LandingGuard implements CanLoad {

  // en export class ... si quiero usar canActivate debo implementarlo

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(
    private router: Router,
    private storage: StorageService ) { }
// Si sale mal, este codigo es el inicial!!!
  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  async canLoad(): Promise<boolean> {
    const hasSeenLanding = await this.storage.getStorage(INTRO_KEY);
    if(hasSeenLanding && hasSeenLanding.value === 'true'){
      return true;
    } else{
      this.router.navigateByUrl('/landing', {replaceUrl: true});
      return true;
    }
  }
}
