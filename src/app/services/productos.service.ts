import { Injectable } from "@angular/core";
import { Producto } from "../interfaces/interfaces.url";
import { Http } from '@capacitor-community/http';
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class ProductosService {
  productos: Producto[] = []
  productosFiltrados: Producto[] = []
  async obtenerProductos() {
    const options = {
      url: environment.API+'/productos',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await Http.get(options);
    console.log(response);
    this.productosFiltrados = this.productos;
    return response.data;
  }
  async filtrarProductos(filtro: string) {
    const filtroLimpio = filtro.toUpperCase();
    this.productosFiltrados = this.productos.filter((producto) => producto.nombre.toUpperCase().includes(filtroLimpio) ||  producto.descripcion?.toUpperCase().includes(filtroLimpio));
    return this.productosFiltrados;
  }
}