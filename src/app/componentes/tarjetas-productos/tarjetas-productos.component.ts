import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/interfaces.url';

@Component({
  selector: 'app-tarjetas-productos',
  templateUrl: './tarjetas-productos.component.html',
  styleUrls: ['./tarjetas-productos.component.scss'],
})
export class TarjetasProductosComponent  implements OnInit {
  @Input() items: Producto[] = [];
  constructor() { }

  ngOnInit() {}

}
