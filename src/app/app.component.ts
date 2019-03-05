import { Component } from '@angular/core';
import {Articulo, Abarrote, Electronico, Samsung, Auto, Chevrolet,Ford} from './modelos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto1';
  constructor(){



    console.log('constructor');
  
    let articulo: Articulo;
  
    let categoria='abarrotes';
    if(categoria=='abarrotes'){
      articulo= new Abarrote();
      console.log(articulo.imprimir())
    }
  
    //let samsung:Samsung= new Samsung();
    //    console.log(samsung.getCategoria());

    let ford: Auto = new Ford();
    console.log(ford.motor);
  }
}



  /*
  public a:string="abc";


  public y:any={
      name:"paola",
      lastname:"Hernandez"
  };


forma1=this.y["name"];
forma2=this.y.name;

private arreglo1:string[];
private arreglo2:string[]=[];
private arreglo3:any[]=["12", '12', 32, {
  name:"paola",
  lastname:'sdd'
}]

public dicc ={
'1':{
  name:"paola",
  lastname:'sdd'
},
'2':{
  name:"paola",
  lastname:'sdd'},
  '3':{
    name:"paola",
  lastname:'sdd'}
  }

  public callback = ((para:string)=>{
    return para + 'algo';
  })

  public metodo = this.callback;
  public rest:string= this.metodo('Paola');
*/

/*
  console.log(this.rest);


for(let i=0; i< this.arreglo3[i]; i++){
  console.log(this.arreglo3[i]);
}

for(let obj of this.arreglo3){
  console.log(obj.name);
}

for(let attr in this.arreglo3){
  console.log(attr);
}


let variable5='1';
switch (variable5){
  case '1':
  console.log('case 1')
  break;
}

*/









