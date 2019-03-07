import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  
  @Input('titulo') title:string;  //Entrada para el Header

public stylepha:any={'color':'red',
                    'font-size':'30px'};

 @Input() categoria:string;

  constructor() { }

  ngOnInit() {
  }


  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log("cur", cur);
      console.log("prev", prev);

    }
  }


}
