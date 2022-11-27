import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from 'src/app/interfaces/paciente.interface';
import { Service } from 'src/app/service/service';
import {faPenSquare} from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from '@angular/forms';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-paciente',
  templateUrl: './ver-paciente.component.html',
  styleUrls: ['./ver-paciente.component.css']
})
export class VerPacienteComponent implements OnInit {

  private able!:boolean;

  public toEditPaciente!:Paciente;

  public formEdit!:FormGroup;

  public editarGuardar!:string;

   iconEdit=faPenSquare;
  constructor(private service:Service, private router:Router) {
    this.toEditPaciente = this.service.storedPaciente;
    console.log('chuchon',this.toEditPaciente);
    this.editarGuardar = 'Editar';
   }
  
  ngOnInit(): void {

    this.formEdit = new FormGroup(
      {
        id: new FormControl(this.toEditPaciente.id),
        nombre: new FormControl(this.toEditPaciente.nombre),
        apellido: new FormControl(this.toEditPaciente.apellido),
        dni: new FormControl(this.toEditPaciente.dni)
      }
    )

    console.log('desde ver',this.service.storedPaciente);
  }


  editar(){
    const input = document.querySelectorAll('.edit');
    const btn = document.getElementById('editar');
    input.forEach(e=>{
      e.removeAttribute('readonly');
    })
    this.formEdit.valueChanges.subscribe(resp=>{

      console.log('hubo cambios',resp);

      this.toEditPaciente = resp;
    })
    console.log('Editando',btn);
    if(this.editarGuardar==="Guardar"){
      this.service.savePacienteQueue(this.toEditPaciente)
        .subscribe(resp=>{
          this.service.setListadoPacientes(resp);
          this.router.navigate(['/listadoPacientes'])
        })
    }
    if(this.editarGuardar === 'Editar'){
      this.editarGuardar = 'Guardar';

    }
    console.log('Editando',btn);
  }
}
