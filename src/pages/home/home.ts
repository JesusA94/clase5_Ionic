import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { DetallePeliculaPage } from '../detalle-pelicula/detalle-pelicula';
import { PeliculaProvider } from '../../providers/pelicula/pelicula';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  resultados=[];
  n:number=0;
  nombre:string=""


  onClickBuscar()
  {
    if (this.nombre.length>0)
    {
      //creamos el loading
      let loading:any= this.loading.create()
      //mostramos el loading
      loading.present()
      this.peliculaService.buscarPelicula(this.nombre).subscribe(
        (respuesta:any)=>{
          if (respuesta.Search==undefined)
          {
            this.toast.create({"message":"No hay Resultados para "+ this.nombre,"duration":5000}).present()
          }
          else
          {
            this.resultados=respuesta.Search   
            this.n=respuesta.totalResult
          }
          //cerramos el loading
          loading.dismiss()
        },
        (error)=>
        {
          this.toast.create({"message":"Ocurrio un error en la conexion "+ error,"duration":10000}).present()
        loading.dismiss()
      }
        
      )
        //this.resultados.push()
        //this.n=this.resultados.length;
    }
  }


  verPelicula(pelicula)
  {
     this.toast.create({"message":"Hola "+ pelicula.Title,"duration":3000}).present()
     this.navCtrl.push(DetallePeliculaPage,{"pelicula":pelicula})
  }

  constructor(public navCtrl: NavController,public toast:ToastController,private peliculaService:PeliculaProvider,
  private loading:LoadingController) {

  }

}
