import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from 'src/app/interfaces/paciente.interface';
import { Service } from 'src/app/service/service';
import {faPenSquare} from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from '@angular/forms';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-ver-paciente',
  templateUrl: './ver-paciente.component.html',
  styleUrls: ['./ver-paciente.component.css']
})
export class VerPacienteComponent implements OnInit {

  public toEditPaciente!:Paciente;

  public formEdit!:FormGroup;

  public editarGuardar!:string;

   iconEdit=faPenSquare;
  constructor(private service:Service) {
    this.toEditPaciente = this.service.storedPaciente;
    this.editarGuardar = 'Editar';
   }
  
  ngOnInit(): void {

    this.formEdit = new FormGroup(
      {
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
    
    console.log('Editando',btn);
    if(this.editarGuardar === 'Editar'){
      this.editarGuardar = 'Guardar';
    }
    const {nombre, apellido, dni} = this.toEditPaciente;
      const laPromesa = new Promise((resolve, reject)=>{
        if(this.editarGuardar==='Guardar'){
          resolve(this.service.savePaciente(nombre,apellido,dni));
        }else{
          reject('No se que onda jaja');
        }
      })
      laPromesa.then((mira)=>{
        console.log('mira la promesa',mira);
      })

         
    console.log('Editando',btn);
  }
}
