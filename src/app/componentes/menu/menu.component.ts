import { Component, Input, OnInit } from '@angular/core';
import { Menu, MenuItem } from 'src/app/interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  @Input() 
  menu: MenuItem[] | undefined;
  
  constructor() { }

  ngOnInit() {
    console.log('Componente menu inicializado', this.menu);
  }

}
