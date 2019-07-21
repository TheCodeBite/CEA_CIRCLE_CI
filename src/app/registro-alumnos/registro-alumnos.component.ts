import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro-alumnos',
  templateUrl: './registro-alumnos.component.html',
  styleUrls: ['./registro-alumnos.component.css']
})
export class RegistroAlumnosComponent implements OnInit {
  formulario: FormGroup;

  constructor(private route: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      nombre: [''],
      apellidoPaterno: [''],
      apellidoMaterno: [''],
      curp :[''], 
      fechadeNacimiento: [''],
      edad: [''],
      sexo: [''],
      direccion: [''],
      municipio: [''],
      matricula: [''],
      carrera: [''],
      aula: [''],
      estado: [''],
      foliocertificado: ['']
    });
  }

  guardar(datos: any){
    console.log(datos);
  }

  regresar(){
    this.route.navigate([""]);
  }
}
