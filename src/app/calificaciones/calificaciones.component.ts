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
  alumnos_lista: any = [];
  matricula = "";
  year = new Date().getFullYear();
  tipo = "UNI";

  tipo_alumnos = true;
  calificacion: any;
  idAlumno: any;
  idMateria: any;
  constructor(private api: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.api.verMateriasAsignadas(this.year, this.tipo).subscribe(response => {
      this.listaMateriasAsignadas = response;
      
    });
    const temp = {
      estado: ['activo']
    }

    this.api.verAlumnos('activo').subscribe(response => {
      this.alumnos = response;
    });
  }

  buscarMaterias() {
    if(this.tipo == 'UNI'){
      this.tipo_alumnos = true;
    }else{
      this.tipo_alumnos = false;
    }
    console.log("TIPO " + this.tipo)
    console.log(this.tipo_alumnos)
    
    this.ngOnInit();
  }

  buscarAlumno() {
    this.api.BuscarAlumnos(this.matricula).subscribe(response => {
      this.listaAlumnos = response;
      this.alumnos_lista = []
      console.log(this.tipo_alumnos)
      for(let i of this.listaAlumnos){
        if(this.tipo_alumnos && i.tipo == "Universidad"){
          console.log("encontre un universitario")
          this.alumnos_lista.push(i)
        }else if(!this.tipo_alumnos && i.tipo == "Preparatoria"){
          this.alumnos_lista.push(i)
          console.log("uno de prepa")
        }
      }
      console.log(this.alumnos_lista)
      this.listaAlumnos  = this.alumnos_lista;
      this.ngOnInit();

    })
  }
  alumnosSeleccionado(idAlumno) {
    this.idAlumno = idAlumno;

  }
  materiaSeleccionada(idMateria) {
    this.idMateria = idMateria;
    this.api.verCalificaciones(idMateria).subscribe(response => {
      this.listaCalificaciones = response;
    });
  }
  agregarCalificacion() {
    var param = {
      alumno: this.idAlumno,
      materia_asignada: this.idMateria,
      calificacion: this.calificacion
    }
    this.api.agregarCalificacion(param).subscribe(response => {
      Swal.fire({
        title: 'Agregado con exito!',
        text: 'La calificación se agrego correctamente.',
        confirmButtonText: 'OK',
        type: 'success'
      }).then((restult) => {
        this.materiaSeleccionada(this.idMateria);
        this.ngOnInit();
      });
    }, err => {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: "Llene todos los campos correctamente"
      })
    });
  }
}