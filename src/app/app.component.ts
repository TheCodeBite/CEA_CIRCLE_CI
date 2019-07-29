import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CEA';

  constructor(private router: Router){}

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