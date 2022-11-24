import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Paciente } from 'src/app/interfaces/paciente.interface';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-listado-pacientes',
  templateUrl: './listado-pacientes.component.html',
  styleUrls: ['./listado-pacientes.component.css']
})
export class ListadoPacientesComponent implements OnInit {
  
  public listaPacientes:Paciente[]=[];
  
  public selected!:Paciente;
  
  public cols:any[]=[];

  public items!:MenuItem [];

  public objPaciente:Paciente = {
    id:0,
    nombre:'',
    apellido:'',
    dni:0
  };

  constructor(private service: Service) {
    this.service.getPacientes()
      .subscribe(resp=>{    
        console.log('server', resp);
        this.service.setListadoPacientes(resp) ;
        this.listaPacientes = this.service.getListadoPacientes;
        console.log('este',this.service.getListadoPacientes);
      })
   }

  ngOnInit(): void {
    this.cols = [
      {field:'nombre',header:'Nombre'},
      {field:'apellido',header:'Apellido'},
      {field:'dni',header:'D.N.I.'},
    ];

    this.items = [
      {
        label:'Ver',
        icon:'pi pi-search',
        command: ()=>this.ver(this.selected),
        routerLink:'verPaciente'
      },
      {
        label:'Eliminar',
        icon:'pi pi-times',
        command:()=> this.eliminar(this.selected)
      }
    ]
  }

  seleccion(e:any){

    console.log('mira mira', this.selected)

  }


  ver(event:Paciente){
    this.service.editarPaciente(event);
    console.log('ver' , event)
  }

  eliminar(paciente:Paciente){
   this.service.deletePaciente(paciente)
   .subscribe(resp => this.listaPacientes = [...resp])
  }

}
