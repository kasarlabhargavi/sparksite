import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  ngOnInit(): void {
    Aos.init();
  }
  brands = [
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

  slickConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },  // Usually reduce on smaller screens
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };
}


