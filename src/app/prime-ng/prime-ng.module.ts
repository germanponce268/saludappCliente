import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {ContextMenuModule} from 'primeng/contextmenu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    MenubarModule,
    ContextMenuModule
  ],
  exports:[
    ButtonModule,
    TableModule,
    MenubarModule,
    ContextMenuModule
  ]
})
export class PrimeNgModule { }
