import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import {Articulo} from '../../modelos/articulo'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {

@Input() articulo:Articulo;

@Output() onQuitar: EventEmitter<number>= new EventEmitter<number>();
@Output() onCambio: EventEmitter<number>= new EventEmitter<number>();


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

console.log("ngOnInt");
console.log(this.articulo);

setTimeout(() => {this.articulo.title='HEADER 1234'},300);


    }





  public accionEliminar (event:boolean){
    console.log("evento capturado de footer");
    this.onQuitar.emit(this.articulo.id);
  }

  public color:boolean=false;

  public select (event:boolean){
    console.log("Evento Cambiar");
    
    this.color = event;
    
  }

  
public ngOnDestroy(){
  console.log("He eliminado la tarjeta");
}


}
