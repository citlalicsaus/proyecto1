import { Component, OnInit, Input } from '@angular/core';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Input('titulo') title:string;  //Entrada para el Header

public stylepha:any={'color':'red',
                    'font-size':'30px'};

 @Input() categoria:string;

  constructor() { }

  ngOnInit() {
  }

}
