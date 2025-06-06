import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CommonModule } from '@angular/common';
import { CustomCommonModule } from "./common/common-module";
import { Home } from './home/home';
import { About } from './about/about';
import { Careers } from './careers/careers';
import { ContactUs } from './contact-us/contact-us';

@NgModule({
  declarations: [
    App,
    Home,
    About,
    Careers,
    ContactUs
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CustomCommonModule,
    SlickCarouselModule
],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
