import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/interfaces.url';

@Component({
  selector: 'app-tarjetas-productos',
  templateUrl: './tarjetas-productos.component.html',
  styleUrls: ['./tarjetas-productos.component.scss'],
})
export class TarjetasProductosComponent  implements OnInit {
  @Input() items: Producto[] = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  navegarAlDetalle(producto: Producto) {
    this.router.navigate([`/detalle-producto`], {
      state: {
        producto
      }
    })
  }
}
