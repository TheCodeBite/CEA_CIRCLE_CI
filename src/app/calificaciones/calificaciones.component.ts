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
  listaMaterias: any;
  listaMaestros: any;

  alumnos: any;

  listaCalificaciones: any;
  listaAlumnos: any;
  matricula = "";
  year = new Date().getFullYear();;
  tipo = "UNI";
  calificacion:any;
  constructor(private api: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.api.verMateriasAsignadas(this.year, this.tipo).subscribe(response => {
      this.listaMateriasAsignadas = response;
      console.log(response)
    });
    const temp = {
      estado: ['activo']
    }

    this.api.verAlumnos('activo').subscribe(response => {
      console.log("alumnos")
      console.log(response);
      this.alumnos = response;
    });
  }
  buscarMaterias() {
    this.ngOnInit();
  }
  buscarAlumno() {
    console.log(this.matricula)
    this.api.BuscarAlumnos(this.matricula).subscribe(response => {
      this.listaAlumnos = response;
      console.log(response)
    })
  }
  agregarCalificacion(idAlumno,idMateria) {
    console.log(idAlumno)
    console.log(idMateria)
    console.log(this.calificacion)
    var param = {
      alumno:idAlumno,
      materia_asignada:idMateria,
      calificacion:this.calificacion
    }
    this.api.agregarCalificacion(param).subscribe(response => {
      console.log("Mensaje de agregado")
    })
  }
}
