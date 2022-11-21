import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  public items:MenuItem[]=[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label:'Guardia',
        items:[{
          label:'Ingreso',
          icon:'pi pi-plus'
        }]
      },
      {
        label:'Consultorios'
      },
      {
        label:'Laboratorio'
      },
      {
        label:'Farmacia'
      },
      
    ]
  }

}
