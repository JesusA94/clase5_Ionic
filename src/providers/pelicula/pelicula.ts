import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PeliculaProvider {

  url="http://www.omdbapi.com/?apikey=477db7f4"
  buscarPelicula(nombre:string)
  {
    return this.http.get(this.url+"&s="+ nombre)
  }

  constructor(public http: HttpClient) {
    console.log('Hello PeliculaProvider Provider');
  }

}
