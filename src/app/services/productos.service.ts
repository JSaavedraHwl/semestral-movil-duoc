import { Injectable } from "@angular/core";
import { Producto } from "../interfaces/interfaces.url";

@Injectable({providedIn: 'root'})
export class ProductosService {
    productos: Producto[] = [
        {
            idProducto: 1,
            nombreProducto: "Bicicleta de Montaña",
            descripcion: "Bicicleta de montaña con suspensión delantera y marco de aluminio ligero.",
            precio: 499.99,
            stock: 15,
            categoria: "Bicicletass",
            fechaCreacion: new Date('2024-08-01'),
            fotoUrl: "https://c02.purpledshub.com/uploads/sites/39/2022/10/Fox-DHX-Factory-rear-mountain-bike-shock-2-3e0ee7f.jpg?w=1029&webp=1"
          },
          {
            idProducto: 2,
            nombreProducto: "Bicicleta de Ciclismo",
            descripcion: "Casco ultraligero para ciclismo con ventilación optimizada y ajuste ergonómico.",
            precio: 89.99,
            stock: 30,
            categoria: "Accesorios",
            fechaCreacion: new Date('2024-09-01'),
            fotoUrl: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dwe75a1b98/images/plp/road-bikes/Ridestyle-canyon-race-my23-02.jpg?sw=632&sh=474&sm=cut"
          }
          ,{
            idProducto: 1,
            nombreProducto: "Bicicleta de Montaña",
            descripcion: "Bicicleta de montaña con suspensión delantera y marco de aluminio ligero.",
            precio: 499.99,
            stock: 15,
            categoria: "Bicicletass",
            fechaCreacion: new Date('2024-08-01'),
            fotoUrl: "https://c02.purpledshub.com/uploads/sites/39/2022/10/Fox-DHX-Factory-rear-mountain-bike-shock-2-3e0ee7f.jpg?w=1029&webp=1"
          },
          {
            idProducto: 2,
            nombreProducto: "Bicicleta de Ciclismo",
            descripcion: "Casco ultraligero para ciclismo con ventilación optimizada y ajuste ergonómico.",
            precio: 89.99,
            stock: 30,
            categoria: "Accesorios",
            fechaCreacion: new Date('2024-09-01'),
            fotoUrl: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dwe75a1b98/images/plp/road-bikes/Ridestyle-canyon-race-my23-02.jpg?sw=632&sh=474&sm=cut"
          }
          ,{
            idProducto: 1,
            nombreProducto: "Bicicleta de Montaña",
            descripcion: "Bicicleta de montaña con suspensión delantera y marco de aluminio ligero.",
            precio: 499.99,
            stock: 15,
            categoria: "Bicicletass",
            fechaCreacion: new Date('2024-08-01'),
            fotoUrl: "https://c02.purpledshub.com/uploads/sites/39/2022/10/Fox-DHX-Factory-rear-mountain-bike-shock-2-3e0ee7f.jpg?w=1029&webp=1"
          },
          {
            idProducto: 2,
            nombreProducto: "Bicicleta de Ciclismo",
            descripcion: "Casco ultraligero para ciclismo con ventilación optimizada y ajuste ergonómico.",
            precio: 89.99,
            stock: 30,
            categoria: "Accesorios",
            fechaCreacion: new Date('2024-09-01'),
            fotoUrl: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dwe75a1b98/images/plp/road-bikes/Ridestyle-canyon-race-my23-02.jpg?sw=632&sh=474&sm=cut"
          }
          ,{
            idProducto: 1,
            nombreProducto: "Bicicleta de Montaña",
            descripcion: "Bicicleta de montaña con suspensión delantera y marco de aluminio ligero.",
            precio: 499.99,
            stock: 15,
            categoria: "Bicicletass",
            fechaCreacion: new Date('2024-08-01'),
            fotoUrl: "https://c02.purpledshub.com/uploads/sites/39/2022/10/Fox-DHX-Factory-rear-mountain-bike-shock-2-3e0ee7f.jpg?w=1029&webp=1"
          },
          {
            idProducto: 2,
            nombreProducto: "Bicicleta de Ciclismo",
            descripcion: "Casco ultraligero para ciclismo con ventilación optimizada y ajuste ergonómico.",
            precio: 89.99,
            stock: 30,
            categoria: "Accesorios",
            fechaCreacion: new Date('2024-09-01'),
            fotoUrl: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dwe75a1b98/images/plp/road-bikes/Ridestyle-canyon-race-my23-02.jpg?sw=632&sh=474&sm=cut"
          }
          ,{
            idProducto: 1,
            nombreProducto: "Bicicleta de Montaña",
            descripcion: "Bicicleta de montaña con suspensión delantera y marco de aluminio ligero.",
            precio: 499.99,
            stock: 15,
            categoria: "Bicicletass",
            fechaCreacion: new Date('2024-08-01'),
            fotoUrl: "https://c02.purpledshub.com/uploads/sites/39/2022/10/Fox-DHX-Factory-rear-mountain-bike-shock-2-3e0ee7f.jpg?w=1029&webp=1"
          },
          {
            idProducto: 2,
            nombreProducto: "Bicicleta de Ciclismo",
            descripcion: "Casco ultraligero para ciclismo con ventilación optimizada y ajuste ergonómico.",
            precio: 89.99,
            stock: 30,
            categoria: "Accesorios",
            fechaCreacion: new Date('2024-09-01'),
            fotoUrl: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dwe75a1b98/images/plp/road-bikes/Ridestyle-canyon-race-my23-02.jpg?sw=632&sh=474&sm=cut"
          }
          ,{
            idProducto: 1,
            nombreProducto: "Bicicleta de Montaña",
            descripcion: "Bicicleta de montaña con suspensión delantera y marco de aluminio ligero.",
            precio: 499.99,
            stock: 15,
            categoria: "Bicicletass",
            fechaCreacion: new Date('2024-08-01'),
            fotoUrl: "https://c02.purpledshub.com/uploads/sites/39/2022/10/Fox-DHX-Factory-rear-mountain-bike-shock-2-3e0ee7f.jpg?w=1029&webp=1"
          },
          {
            idProducto: 2,
            nombreProducto: "Bicicleta de Ciclismo",
            descripcion: "Casco ultraligero para ciclismo con ventilación optimizada y ajuste ergonómico.",
            precio: 89.99,
            stock: 30,
            categoria: "Accesorios",
            fechaCreacion: new Date('2024-09-01'),
            fotoUrl: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dwe75a1b98/images/plp/road-bikes/Ridestyle-canyon-race-my23-02.jpg?sw=632&sh=474&sm=cut"
          }
          ,{
            idProducto: 1,
            nombreProducto: "Bicicleta de Montaña",
            descripcion: "Bicicleta de montaña con suspensión delantera y marco de aluminio ligero.",
            precio: 499.99,
            stock: 15,
            categoria: "Bicicletass",
            fechaCreacion: new Date('2024-08-01'),
            fotoUrl: "https://c02.purpledshub.com/uploads/sites/39/2022/10/Fox-DHX-Factory-rear-mountain-bike-shock-2-3e0ee7f.jpg?w=1029&webp=1"
          },
          {
            idProducto: 2,
            nombreProducto: "Bicicleta de Ciclismo",
            descripcion: "Casco ultraligero para ciclismo con ventilación optimizada y ajuste ergonómico.",
            precio: 89.99,
            stock: 30,
            categoria: "Accesorios",
            fechaCreacion: new Date('2024-09-01'),
            fotoUrl: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dwe75a1b98/images/plp/road-bikes/Ridestyle-canyon-race-my23-02.jpg?sw=632&sh=474&sm=cut"
          }
          ,{
            idProducto: 1,
            nombreProducto: "Bicicleta de Montaña",
            descripcion: "Bicicleta de montaña con suspensión delantera y marco de aluminio ligero.",
            precio: 499.99,
            stock: 15,
            categoria: "Bicicletass",
            fechaCreacion: new Date('2024-08-01'),
            fotoUrl: "https://c02.purpledshub.com/uploads/sites/39/2022/10/Fox-DHX-Factory-rear-mountain-bike-shock-2-3e0ee7f.jpg?w=1029&webp=1"
          },
          {
            idProducto: 2,
            nombreProducto: "Bicicleta de Ciclismo",
            descripcion: "Casco ultraligero para ciclismo con ventilación optimizada y ajuste ergonómico.",
            precio: 89.99,
            stock: 30,
            categoria: "Accesorios",
            fechaCreacion: new Date('2024-09-01'),
            fotoUrl: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dwe75a1b98/images/plp/road-bikes/Ridestyle-canyon-race-my23-02.jpg?sw=632&sh=474&sm=cut"
          }
          ,{
            idProducto: 1,
            nombreProducto: "Bicicleta de Montaña",
            descripcion: "Bicicleta de montaña con suspensión delantera y marco de aluminio ligero.",
            precio: 499.99,
            stock: 15,
            categoria: "Bicicletass",
            fechaCreacion: new Date('2024-08-01'),
            fotoUrl: "https://c02.purpledshub.com/uploads/sites/39/2022/10/Fox-DHX-Factory-rear-mountain-bike-shock-2-3e0ee7f.jpg?w=1029&webp=1"
          },
          {
            idProducto: 2,
            nombreProducto: "Bicicleta de Ciclismo",
            descripcion: "Casco ultraligero para ciclismo con ventilación optimizada y ajuste ergonómico.",
            precio: 89.99,
            stock: 30,
            categoria: "Accesorios",
            fechaCreacion: new Date('2024-09-01'),
            fotoUrl: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dwe75a1b98/images/plp/road-bikes/Ridestyle-canyon-race-my23-02.jpg?sw=632&sh=474&sm=cut"
          }
    ]
    productosFiltrados: Producto[] = []
    async obtenerProductos() {
        this.productosFiltrados = this.productos;
        return this.productosFiltrados.sort();
    }
    async filtrarProductos( filtro: string ) {
        const filtroLimpio = filtro.toUpperCase();
        this.productosFiltrados = this.productos.filter( (producto) => producto.nombreProducto.toUpperCase().includes(filtroLimpio) || producto.categoria?.toUpperCase().includes(filtroLimpio) || producto.descripcion?.toUpperCase().includes(filtroLimpio));
        return this.productosFiltrados;
    }
}