import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Producto } from 'src/app/interfaces/interfaces.url';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {
  tabActual: string = 'descripcion';
  producto: Producto;
  constructor(
    private toast: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if(state) {
      this.producto = state['producto'] as Producto;
    }
    console.log('Producto abierto: ', this.producto);
  }

  async guardarEnFavoritos() {
    setTimeout(async ()=> {
      await this.levantarToastExito();
    }, 2000)
  }
  async levantarToastExito() {
    const toast = await this.toast.create({
      color: 'success',
      duration: 2000,
      message: 'Elemento guardado correctamente.',
    });
    toast.present();
  }
  cambiarTab(event: any) {
    console.log('mostrando', event.detail.value)
    this.tabActual = event.detail.value;
  }
}
