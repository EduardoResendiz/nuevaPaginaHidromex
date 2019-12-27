import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private menuCtrl: MenuController,private router: Router, private navCtrl:NavController) {}

  toogleMenu(){
    this.menuCtrl.toggle();
  }

  slides=[{
    img: 'assets/imagenes/Avion1.jpg'
  },{
    img: 'assets/imagenes/Avion2.jpg'
  },{
    img: 'assets/imagenes/Avion3.jpg'
  }]

  goNosotros(){
    console.log('Hola mundo');
    this.router.navigate(["/home : nosotros"]);
  }

}
