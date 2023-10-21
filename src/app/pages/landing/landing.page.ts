import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Swiper  from 'swiper';
import { Router } from '@angular/router';
import { INTRO_KEY, StorageService } from 'src/app/services/storage/storage.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  constructor(
    private router: Router,
    private storage: StorageService
    ) { }


  ngOnInit() {
  }

  swiperReady(){
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  async goToLogin(){
    await this.storage.setStorage(INTRO_KEY, 'true');
    this.router.navigateByUrl('/auth-screen', { replaceUrl: true });
  }

  goPrev(){
    this.swiper?.slidePrev();
  }

  swiperSlideChanged(e: any){
    console.log('changed: ',e );
  }



}
