import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoPacientesComponent } from './listado-pacientes/listado-pacientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MainComponent } from './main/main.component';
import { VerPacienteComponent } from './ver-paciente/ver-paciente.component';



@NgModule({
  declarations: [
    FormularioComponent,
    ListadoPacientesComponent,
    MenuBarComponent,
    MainComponent,
    VerPacienteComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ReactiveFormsModule
  ],
  exports:[
    FormularioComponent,
    ListadoPacientesComponent,
    MenuBarComponent
  ]
})
export class ComponentesModule { }
