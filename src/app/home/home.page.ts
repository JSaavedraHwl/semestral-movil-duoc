import { Component } from '@angular/core';
import { Menu, MenuItem } from '../interfaces/menu.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  menu: MenuItem[] = [
    {
      name:"Home",
      url:"/",
      
    },
    {
      name:"Nuestro Catalogo",
      url: null
    },
    {
      name:"Taller",
      url:null
    }
  ]
  constructor() {}

}
