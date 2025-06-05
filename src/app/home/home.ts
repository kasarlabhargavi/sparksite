import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit{
  ngOnInit(): void {
    Aos.init();
  }
}
