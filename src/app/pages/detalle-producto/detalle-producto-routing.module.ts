import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleProductoPage } from './detalle-producto.page';
import { PerfilUsuarioPage } from '../perfil-usuario/perfil-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleProductoPage,
    // children: [
    //   // {
    //   //   path:'reviews',
    //   //   component: PerfilUsuarioPage
    //   // },
    //   // {
    //   //   path:'especificacion',
    //   //   component: PerfilUsuarioPage
    //   // },
    //   // {
    //   //   path:'descripcion',
    //   //   component: PerfilUsuarioPage
    //   // }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleProductoPageRoutingModule {}
