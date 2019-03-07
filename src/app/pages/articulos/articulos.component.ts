import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';

import {articulosBD } from '../../datos/articulosDB';
import {Articulo } from '../../modelos/articulo';

@Component({
  selector: 'articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {


  public lista : Articulo[]=articulosBD;


  constructor() { }

  ngOnInit() {
  }

  public quitar(id:number){

      for(let i=0; i<this.lista.length; i++){
        if(this.lista[i].id==id){
          this.lista.splice(i, 1);
        }
      }

  }

  

}
