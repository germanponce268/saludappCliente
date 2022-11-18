import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Paciente } from './interfaces/paciente.interface';
import { Service } from './service/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'saludappCliente';

  checkForm = this.formBuilder.group({
    nombre:'',
    apellido:'',
    dni:0
  })

  paciente!:Paciente;
  constructor(private formBuilder:FormBuilder, private service:Service){

  }


  onSubmit(){
    const {nombre,apellido, dni} = this.checkForm.value;
    this.service.savePaciente(nombre,apellido,dni);
    console.log(this.checkForm.value);
  }

}
