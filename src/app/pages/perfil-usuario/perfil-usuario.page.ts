import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  constructor(
    private toast: ToastController
  ) { }

  async ngOnInit() {
    const toast = await this.toast.create({
      color:'secondary',
      message: 'Se ha iniciado sesión correctamente.',
      duration: 2000,
    });
    
    toast.present();
  }

}
