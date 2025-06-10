import { Component, OnInit, AfterViewInit } from '@angular/core';
import Aos from 'aos';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, AfterViewInit {

  ngOnInit(): void {
    Aos.init();
  }
 brandImages = [
  { img: '/images/brand-logos/apsc-logo.png' },
  { img: '/images/brand-logos/boditech.jpg' },
  { img: '/images/brand-logos/cytek.png' },
  { img: '/images/brand-logos/diatron.png' },
  { img: '/images/brand-logos/dlab.png' },
  { img: '/images/brand-logos/medica.png' },
  { img: '/images/brand-logos/origio.png' },
  { img: '/images/brand-logos/polylc-logo.png' },
  { img: '/images/brand-logos/polyscience-logo.png' },
  { img: '/images/brand-logos/precision.png' },
  { img: '/images/brand-logos/prokan.png' },
  { img: '/images/brand-logos/scas-logo.png' },
  { img: '/images/brand-logos/shodex.jpg' }
];
 ngAfterViewInit(): void {
  new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {  // tablets
        slidesPerView: 4,
      },
      1024: { // desktops
        slidesPerView: 6,
      },
    },
  });
 }
}


