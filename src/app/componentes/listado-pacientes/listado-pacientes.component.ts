import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/interfaces/paciente.interface';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-listado-pacientes',
  templateUrl: './listado-pacientes.component.html',
  styleUrls: ['./listado-pacientes.component.css']
})
export class ListadoPacientesComponent implements OnInit {
  public listaPacientes:Paciente[]=[];
  public objPaciente:Paciente = {
    nombre:'',
    apellido:'',
    dni:0
  };

  constructor(private service: Service) {
    
    this.service.getPacientes()
      .subscribe(resp=>{
        
        this.listaPacientes = resp;
      })
      console.log('este',this.listaPacientes);

   }

  
  
  ngOnInit(): void {
  }
}
