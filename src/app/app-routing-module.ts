import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Careers } from './careers/careers';
import { ContactUs } from './contact-us/contact-us';

const routes: Routes = [
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'about-us',
    component: About,
  },
  {
    path: 'careers',
    component: Careers,
  },
  {
    path: 'contact-us',
    component: ContactUs,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
