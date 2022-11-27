import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MainComponent } from './app/componentes/main/main.component';
import { ListadoPacientesComponent } from './app/componentes/listado-pacientes/listado-pacientes.component';
import { FormularioComponent } from './app/componentes/formulario/formulario.component';
import { VerPacienteComponent } from './app/componentes/ver-paciente/ver-paciente.component';

const routes: Route[]=[
    {
      path:'',
      component:MainComponent,
      pathMatch:'full'
    },
    {
      path:'listadoPacientes',
      component:ListadoPacientesComponent
    },
    {
      path:'listadoPacientes/formulario',
      component:FormularioComponent
    },
    {
      path:'listadoPacientes/verPaciente',
      component:VerPacienteComponent
    }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
