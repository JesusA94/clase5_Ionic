import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detalle-pelicula',
  templateUrl: 'detalle-pelicula.html',
})
export class DetallePeliculaPage {

  pelicula={};

  constructor(public navCtrl: NavController, public navParams: NavParams) {



    this.pelicula=navParams.get("pelicula")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePeliculaPage');
  }

}
