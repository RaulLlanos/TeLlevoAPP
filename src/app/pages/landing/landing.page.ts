import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Swiper  from 'swiper';
import { Router } from '@angular/router';

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

  goToLogin(){
    this.router.navigate(['/home']);
  }

  goPrev(){
    this.swiper?.slidePrev();
  }

  swiperSlideChanged(e: any){
    console.log('changed: ',e );
  }



}
