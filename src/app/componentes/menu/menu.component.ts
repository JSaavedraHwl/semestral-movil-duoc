import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Menu, MenuItem } from 'src/app/interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  @Input() 
  menu: MenuItem[] | undefined;
  
  constructor(
    private router: Router,
    private toast: ToastController
  ) { }

  ngOnInit() {
    console.log('Componente menu inicializado', this.menu);
  }
  async redireccionar(url: string| null) {
    if(url) {
      try {
        await this.router.navigate([url]);
      }
      catch(error) {
        this.abrirAlertaEnConstruccion();
      }
    }
  }
  async abrirAlertaEnConstruccion() {
    const toast = await this.toast.create({
      message: 'Sitio en construcción',
      duration: 2000,
      position: 'bottom',
      color:'danger',
      animated: true
    });
    toast.present();
  }
}
