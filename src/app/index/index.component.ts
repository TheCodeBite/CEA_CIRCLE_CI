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

  registroAlumno(){
    console.log("BOTON REGISTRO ALUMNO ");
    this.router.navigate(["/registroAlumnos"]);
  }

  registroMaestro(){
    console.log("BOTON REGISTRO MAESTRO");
    this.router.navigate(["/registroMaestro"]);
  }

}
