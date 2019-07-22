import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro-maestro',
  templateUrl: './registro-maestro.component.html',
  styleUrls: ['./registro-maestro.component.css']
})
export class RegistroMaestroComponent implements OnInit {
  formulario: FormGroup;

  constructor(private route:Router, private fb:FormBuilder) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      datosPersonales: this.fb.group({
        apellidopaterno: [''],
        apellidomaterno: [''],
        nombre: [''],
        fechadenacimiento: [''],
        edad: [''],
        correo: [''],
        telefono: [''],
        direccion: [''],
        sexo: ['']
      }),
      informacionAcademica  : this.fb.group({
        tituloprofesional: [''],
        cedulaprofesional: [''],
        institucioneducativa: [''],
        tipo: ['']
      })
    });

  }

  save(datos: any){
    console.log("guardando datos del profesor..");
    console.log(datos);
  }
}
