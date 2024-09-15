import { Component, OnInit } from '@angular/core';
import { IonSearchbar, SearchbarChangeEventDetail, SearchbarCustomEvent, SearchbarInputEventDetail } from '@ionic/angular';
import { HomePage } from 'src/app/home/home.page';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {



  constructor() { }

  ngOnInit() {
    console.log('Productos page')
  }

  enviarBusqueda($event:SearchbarCustomEvent ) {
    const { value } = $event.detail;
  }

}
