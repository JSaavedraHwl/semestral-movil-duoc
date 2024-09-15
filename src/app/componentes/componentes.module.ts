import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { TarjetasProductosComponent } from './tarjetas-productos/tarjetas-productos.component';



@NgModule({
  declarations: [MenuComponent, TarjetasProductosComponent],
  exports: [MenuComponent, TarjetasProductosComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }
