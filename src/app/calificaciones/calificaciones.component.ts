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
  listaCalificaciones:any;
  listaAlumnos:any;
  matricula="";
  constructor(private api: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    var year = new Date().getFullYear();
    this.api.verMateriasAsignadas(year,"Universidad").subscribe(response => {
      this.listaMateriasAsignadas=response;
      console.log(response)
    })
  }
  buscarAlumno(){
    console.log(this.matricula)
    this.api.BuscarAlumnos(this.matricula).subscribe(response => {
      this.listaAlumnos=response;
      console.log(response)
    })
  }
}
