import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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
    dni:''
  })
  constructor(private formBuilder:FormBuilder){
  }


  onSubmit(){
    console.log(this.checkForm.value);
  }

}
