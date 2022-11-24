import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {ContextMenuModule} from 'primeng/contextmenu';
import { InputTextModule } from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
FontAwesomeModule
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    MenubarModule,
    ContextMenuModule,
    InputTextModule,
    CardModule,
    FontAwesomeModule
    
  ],
  exports:[
    ButtonModule,
    TableModule,
    MenubarModule,
    ContextMenuModule,
    CardModule,
    InputTextModule,
    FontAwesomeModule
  ]
})
export class PrimeNgModule { }
