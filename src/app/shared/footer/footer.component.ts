import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  public botones:any[]=[
  {name:'boton 1' },
  {name:'boton 2' },
  {name:'boton 2' }];

public promotion:boolean=true;
public color:boolean=false;

@Output() onEliminar:EventEmitter<boolean>=new EventEmitter<boolean>();
@Output() onCambiar:EventEmitter<boolean>=new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public aplicarPromocion(){
    this.color = !this.color;
  }

  public eliminar(){

    this.onEliminar.emit(true);
    console.log("funcionando");
    
  }

  public Cambiar(){

    this.onCambiar.emit(true);
    console.log("funcionando Evento Cambiar");
    
  }




  

}
