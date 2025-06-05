import { Component, OnInit } from '@angular/core';
import Aos from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected title = 'spark';
  isCollapsed = true;

  ngOnInit(): void {
    Aos.init();
  }

}
