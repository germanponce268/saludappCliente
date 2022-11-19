import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Paciente } from 'src/app/interfaces/paciente.interface';
import { Service } from 'src/app/service/service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  checkForm!:FormGroup;
  paciente!:Paciente;
  constructor( private service:Service){
    
  }
  ngOnInit(): void {
    
    this.checkForm = new FormGroup({
      nombre: new FormControl<string>(''),
      apellido: new FormControl<string>(''),
      dni: new FormControl<number>(0)
    })
  }

  

  onSubmit(){
    const {nombre,apellido, dni} = this.checkForm.value;
    this.service.savePaciente(nombre,apellido,dni);
  }

}

