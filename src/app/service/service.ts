import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Paciente } from "../interfaces/paciente.interface";

@Injectable()
export class Service{

    constructor(private http:HttpClient){}


    savePaciente(nombre:string|null|undefined, apellido:string|null|undefined, dni:number|null|undefined){

        const paciente = {nombre, apellido, dni};

        this.http.post(
            'http://localhost:8080/servicio/savePaciente',paciente
        ).subscribe(resp=>console.log(resp));
    }

    getPacientes(){
        return this.http.get<Paciente[]>('http://localhost:8080/servicio/listaPacientes');
    }

    deletePaciente(paciente:Paciente){
        const url = `http://localhost:8080/servicio/eliminarPaciente/${paciente.id}`;
       return this.http.delete<Paciente[]>(url);
    }
}