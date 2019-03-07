import { Component, OnInit, Input, 
  Output, EventEmitter, 
  OnDestroy } from '@angular/core';
import { Articulo } from '../../modelos/articulo';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {

  @Input() articulo: Articulo;
  @Output() onQuitar: EventEmitter < number >= new EventEmitter < number > ();

  public color: boolean = false;

  constructor() {
    console.log("contructor");
    console.log(this.articulo);
  }

  ngOnInit() {

    console.log("ngOnInit");
    console.log(this.articulo);

    setTimeout(()=>{
      this.articulo.title='HEADER 111112';

    }, 3000 );


  }

  public accionEliminar(event: boolean) {
    console.log("evento capturado de footer");
    this.onQuitar.emit(this.articulo.id);

  }

  public select(event: boolean) {
    console.log("entroooooooo");

    this.color = event;

  }

  public ngOnDestroy(){

    console.log("He eloiminado esta tarjeta");

  }

}
