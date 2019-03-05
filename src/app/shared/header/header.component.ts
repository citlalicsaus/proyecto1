import { Component, OnInit } from '@angular/core';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

public title:string="Citlali";

public stylepha:any={'color':'red',
                    'font-size':'30px'};

public categoria:string = 'A';

  constructor() { }

  ngOnInit() {
  }

}
