import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-alumnos',
  templateUrl: './registro-alumnos.component.html',
  styleUrls: ['./registro-alumnos.component.css']
})
export class RegistroAlumnosComponent implements OnInit {
  tipoAlumno = ""
  nameButton = "Universidad"
  alumno_prepa = true;
  isEditable = true;

  datos_personales: FormGroup;
  datos_escuela: FormGroup;
  documentos: FormGroup;
  constructor(private route: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.datos_personales = this.fb.group({
      nombre: [''],
      apellidopaterno: [''],
      apellidomaterno : [''],
      tutor: [''],
      curp: [''],
      fechadenacimiento: [''],
      edad: [''],
      sexo: [''],
      direccion: [''],
      municipio: [''],
      telefono: ['']
    });

    this.datos_escuela = this.fb.group({
      matricula: [''],
      carrera: [''],
      aula: [''],
      estado: [''],
      folio_certificado: [''],
      modalidad: ['']
    });

    this.documentos = this.fb.group({
      certificado_original: [''],
      certificado_tres_copias: [''],
      acta_de_nacimiento: [''],
      acta_de_nacimiento_tres_copias: [''],
      ine_tres_copias: [''],
      comprobante_de_domicilio: ['']
    });
  }

  guardar(datos: any){
    console.log(datos);
  }

  regresar(){
    this.route.navigate([""]);
  }

  chage_alumno(){
    console.log("click en ocultar");
    this.alumno_prepa = !this.alumno_prepa;
    console.log("alumno prepa ");
    if(this.alumno_prepa){
      this.tipoAlumno = " de Prepatoria";
      this.nameButton = "Universidad";
    }else{
      this.tipoAlumno = "de Universidad";
      this.nameButton = "Prepatoria";
    }
    console.log(this.alumno_prepa)
  }

  registrar(datos_personales_value: any, datos_escuela_value: any, documentos_value: any){
    console.log(datos_personales_value);
    console.log(datos_escuela_value); 
    console.log(documentos_value);

    Swal.fire({
      title: 'Registro guardado!',
      text: 'el alumno se alamceno con exito en la base de datos',
      confirmButtonText: 'OK',
      type: 'success'     
    }).then((restult) =>{
      this.route.navigate(['']);
    })
  }

  

}
