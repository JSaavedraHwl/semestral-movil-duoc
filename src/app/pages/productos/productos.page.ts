import { Component, OnInit } from '@angular/core';
import { IonSearchbar, SearchbarChangeEventDetail, SearchbarCustomEvent, SearchbarInputEventDetail } from '@ionic/angular';
import { HomePage } from 'src/app/home/home.page';
import { Producto } from 'src/app/interfaces/interfaces.url';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  busquedaActual: string = '';
  productos: Producto[] = [];

  constructor(
    private productosService: ProductosService
  ) { }

  ngOnInit() {
    console.log('Productos page')
    this.obtenerProductos('');
  }

  enviarBusqueda($event:SearchbarCustomEvent ) {
    const { value } = $event.detail;
    if(typeof value === 'string' ) {
      if(value === '') {
        this.obtenerProductos(value);
      }
      else {
        this.busquedaActual = value;
        this.obtenerProductos(value);
      }
    }
  }
  obtenerProductos(valor: string) {
    if(valor === '') {
      this.productosService.obtenerProductos()
      .then((data) => this.productos = data)
      .catch((error) => console.log(error));
    }
    else {
      this.productosService.filtrarProductos(valor)
        .then((productos) => this.productos = productos)
        .catch((error)=> console.error(error));
    }
  }

}
