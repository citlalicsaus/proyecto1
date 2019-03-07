import { Injectable } from '@angular/core';
import {Articulo} from '../modelos/articulo';
import {articulosBD} from '../datos/articulosDB';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {


public articulos:Articulo[]=articulosBD;

public nuevo(articulo:Articulo){
  this.articulos.push(articulo);
}

public borrar(articulo:Articulo){
  for(let i=0; i < this.articulos.length; i++){
    if(articulo.id == this.articulos[i].id){
      this.articulos.splice(i,1);
    }
  }
}

  constructor() { }

  public getArticulos(){
    return this.articulos;
  }
}
