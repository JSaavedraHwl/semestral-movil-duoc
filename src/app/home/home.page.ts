import { Component , HostListener } from '@angular/core';
import { Menu, MenuItem } from '../interfaces/menu.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event : Event){
    const scrollPosition = window.pageYOffset; 
    const content = document.querySelector('.scrollable-content') as HTMLElement;

    if (content) {
     
      content.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    }
  }

  menu: MenuItem[] = [
    {
      name:"Home",
      url:"/home",
      subMenu: [
      ]
    },
    {
      name:"Nuestro Catalogo",
      url: null,
      subMenu: [
        { name: 'Busqueda', url: '/productos', subMenu: [] },
      ]
    },
    {
      name:"Taller",
      url:null,
      subMenu: []
    }
  ]
  constructor() {}

}
