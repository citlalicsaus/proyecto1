import { Component, OnInit, Input } from '@angular/core';
import {Articulo} from '../../modelos/articulo'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

@Input() articulo:Articulo;
  /*
  public articulo: Articulo={
    nombre:'Television',
    marca:'Samsung',
    precio:4000,
    title:'Television',
    description:'34 pulgadas',
    promotion:true,
    categoria:'E'
  }
  */
  
  constructor() { }


  ngOnInit() {
  }

}
