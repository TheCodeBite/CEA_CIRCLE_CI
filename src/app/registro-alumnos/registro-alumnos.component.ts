import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-alumnos',
  templateUrl: './registro-alumnos.component.html',
  styleUrls: ['./registro-alumnos.component.css']
})
export class RegistroAlumnosComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  regresar(){
    this.route.navigate([""]);
  }
}
