import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import Swal from 'sweetalert2';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-registro-maestro',
  templateUrl: './registro-maestro.component.html',
  styleUrls: ['./registro-maestro.component.css'],
})

export class RegistroMaestroComponent implements OnInit {
  datosPersonales: FormGroup;
  informacionAcademica: FormGroup;
  isEditable = true;


  constructor(private api: ApiService, private route: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.datosPersonales = this.fb.group({
      apellidopaterno: ['', Validators.required],
      apellidomaterno: ['', Validators.required],
      nombre: ['', Validators.required],
      fechadenacimiento: ['', Validators.required],
      edad: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      sexo: ['', Validators.required]
    });

    this.informacionAcademica = this.fb.group({
      tituloprofesional: ['', Validators.required],
      cedulaprofesional: ['', Validators.required],
      institucioneducativa: ['', Validators.required],
      tipo: ['', Validators.required]
    });

  }


  save(datosPersonales_value: any, informacionAcademica_value: any) {
    console.log("guardando datos del profesor..");
    console.log(datosPersonales_value.apellidopaterno);
    console.log(informacionAcademica_value);

    const formulario = {
      apellidopaterno: datosPersonales_value.apellidopaterno,
      apellidomaterno: datosPersonales_value.apellidomaterno,
      nombre: datosPersonales_value.nombre,
      fechadenacimiento: datosPersonales_value.fechadenacimiento,
      edad: datosPersonales_value.edad,
      correo: datosPersonales_value.correo,
      telefono: datosPersonales_value.telefono,
      direccion: datosPersonales_value.direccion,
      sexo: datosPersonales_value.sexo,
      tituloprofesional: informacionAcademica_value.tituloprofesional,
      cedulaprofesional: informacionAcademica_value.cedulaprofesional,
      institucioneducativa: informacionAcademica_value.institucioneducativa,
      tipo: informacionAcademica_value.tipo,
      estado: 'activo'

    }

    this.api.agregarMaestro(formulario).subscribe(response => {
      console.log("maestro registrado");
      Swal.fire({
        title: 'Registro guardado!',
        text: 'el profesor se alamceno con exito en la base de datos',
        confirmButtonText: 'OK',
        type: 'success'
      }).then((restult) => {
        this.home();
      })
      this.ngOnInit();
    }, err => {
      console.log("UPS! ah ocurrido un error");
      console.log(err.error);
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Llene los campos correctamente'
      })
    });

  }

  cancel() {
    this.route.navigate(['']);
  }

  home() {
    console.log("redirigiendo al index");
    this.route.navigate(['']);
  }
}



