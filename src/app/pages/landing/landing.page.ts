import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Swiper  from 'swiper';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

export const INTRO_KEY = 'intro-slides';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  constructor(private router: Router) { }


  ngOnInit() {
  }

  swiperReady(){
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  async goToLogin(){
    await Preferences.set({
      key: INTRO_KEY,
      value: 'true'
    });
    this.router.navigateByUrl('/auth-screen', { replaceUrl: true });
  }

  goPrev(){
    this.swiper?.slidePrev();
  }

  swiperSlideChanged(e: any){
    console.log('changed: ',e );
  }



}
