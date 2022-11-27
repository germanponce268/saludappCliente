import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Paciente } from 'src/app/interfaces/paciente.interface';
import { Service } from 'src/app/service/service';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  checkForm!:FormGroup;
  paciente!:Paciente;
  faCoffee=faIdCard;
  constructor( private service:Service, private router:Router){  

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
    this.service.savePaciente(nombre,apellido,dni)
      .subscribe(resp=> {
        this.service.setListadoPacientes(resp);
      });
  }

  onSubmit2(){
    if(this.checkForm.value.nombre===''&&this.checkForm.value.apellido===''&&this.checkForm.value.dni===0){
      console.log('ta vacio');
    }else{
      this.paciente = this.checkForm.value;
      this.service.savePacienteQueue(this.paciente)
      .subscribe(resp=>{
        this.service.setListadoPacientes(resp);
        
        console.log(resp);
        });
        console.log(this.paciente);
        this.router.navigate(['/listadoPacientes']);
      }
    }


}

