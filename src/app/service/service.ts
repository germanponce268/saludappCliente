import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Paciente } from "../interfaces/paciente.interface";

@Injectable()
export class Service{

    public storedPaciente!:Paciente;

    private listadoPacientes:Paciente[]=[];

    constructor(private http:HttpClient){}

    setListadoPacientes(listadoPacientes:Paciente[]){
         this.listadoPacientes = listadoPacientes;
    }

    get getListadoPacientes():Paciente[]{
        return this.listadoPacientes;
    }

    savePaciente(nombre:string|null|undefined, apellido:string|null|undefined, dni:number|null|undefined){

        const paciente = {nombre, apellido, dni};

        return this.http.post<Paciente[]>(
            'http://localhost:8080/servicio/savePaciente',paciente
        );
    }

    getPacientes(){
        return this.http.get<Paciente[]>('http://localhost:8080/servicio/listaPacientes');
    }

    deletePaciente(paciente:Paciente){
        const url = `http://localhost:8080/servicio/eliminarPaciente/${paciente.id}`;
       return this.http.delete<Paciente[]>(url);
    }

    editarPaciente(paciente:Paciente){
        this.storedPaciente = paciente;
        console.log('mira mira, el paciente', paciente)
    }
}