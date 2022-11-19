import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoPacientesComponent } from './listado-pacientes/listado-pacientes.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormularioComponent,
    ListadoPacientesComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ReactiveFormsModule
  ],
  exports:[
    FormularioComponent,
    ListadoPacientesComponent
  ]
})
export class ComponentesModule { }
