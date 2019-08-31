import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
  }

  //RUTA DE LOS BOTONES 
  registroAlumno(){
    console.log("BOTON REGISTRO ALUMNO ");
    this.router.navigate(["/registroAlumnos"]);
  }

  listaAlumnos(){
    this.router.navigate(["/listaAlumnos"]);
  }

  listaMaestros(){
    this.router.navigate(["/listaMaestros"]);
  }

  pagosAlumnos(){
    this.router.navigate(["/pagosAlumnos"]);
  }

  pagosMaestros(){
    this.router.navigate(["/pagosMaestros"]);
  }

  calificaciones(){
    this.router.navigate(["/calificaciones"]);
  }

}
