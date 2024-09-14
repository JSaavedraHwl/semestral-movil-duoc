import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  menu = [
    {
      name:"Home",
      url:"/"
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
