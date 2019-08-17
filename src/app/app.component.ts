import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'CEA';
  constructor(private apiService: ApiService,private router: Router){}

//RUTA DE NAVEGACION DEL NAVBAR
  registroAlumno(){
    console.log("BOTON REGISTRO ALUMNO ");
    this.router.navigate(["/registroAlumnos"]);
  }

  registroMaestro(){
    console.log("BOTON REGISTRO MAESTRO");
    this.router.navigate(["/registroMaestro"]);
  }

  home(){
    console.log("redirigiendo al index");
    this.router.navigate(['']);
  }

  listaMaestros(){
    this.router.navigate(['listaMaestros']);
  }

  listaAlumnos(){
    this.router.navigate(['listaAlumnos']);
  }

  aulas(){
    this.router.navigate(['aulas']);
  }

  carreras(){
    this.router.navigate(['carreras']);
  }

  pagosAlumnos(){
    this.router.navigate(['pagosAlumnos']);
  }

}

//RUTAS DEL NAVBAR
/*
registroAlumno(){
  console.log("BOTON REGISTRO ALUMNO ");
  this.router.navigate(["/registroAlumnos"]);
}

registroMaestro(){
  console.log("BOTON REGISTRO MAESTRO");
  this.router.navigate(["/registroMaestro"]);
}
*/