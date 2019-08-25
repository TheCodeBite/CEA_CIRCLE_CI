import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {
  formulario: FormGroup;
  listaMateriasAsignadas: any;
  listaMaterias:any;
  listaMaestros:any;

  alumnos: any;

  listaCalificaciones:any;
  listaAlumnos:any;
  matricula="";
  constructor(private api: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    var year = new Date().getFullYear();
    console.log("year:" + year)
    this.api.verMateriasAsignadas(year,"UNI").subscribe(response => {
      this.listaMateriasAsignadas=response;
      console.log(response)
    });

    const temp = {
      estado: ['activo']
    }
    
    this.api.verAlumnos('activo').subscribe(response =>{
      console.log("alumnos")
      console.log(response);
      this.alumnos = response;
    });
  }

  buscarAlumno(){
    console.log(this.matricula)
    this.api.BuscarAlumnos(this.matricula).subscribe(response => {
      this.listaAlumnos=response;
      console.log(response)
    })
  }
}
