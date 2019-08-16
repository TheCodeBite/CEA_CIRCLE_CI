import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-registro-alumnos',
  templateUrl: './registro-alumnos.component.html',
  styleUrls: ['./registro-alumnos.component.css']
})
export class RegistroAlumnosComponent implements OnInit {
  grupos: any;
  carreras: any;

  tipo = "Preparatoria";
  tipoAlumno = "Preparatoria"
  nameButton = "Universidad"

  alumno_prepa = true;
  isEditable = true;
  

  datos_personales: FormGroup;
  datos_escuela: FormGroup;
  documentos: FormGroup;
  constructor(private route: Router, private fb: FormBuilder, private api: ApiService) { }

  ngOnInit() {

    this.api.verCarreras().subscribe(response =>{
      this.carreras = response;
      console.log("carreras")
      console.log(this.carreras);
      console.log("fin carreras")
    })

    this.api.verAulas().subscribe(response => {
      this.grupos = response;
      console.log(this.grupos);
    })

    this.datos_personales = this.fb.group({
      nombre: [''],
      apellidopaterno: [''],
      apellidomaterno: [''],
      tutor: [' '],
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
      grupo: [''],
      estado: [''],
      folio_certificado: [''],
      modalidad: [''],
    });

    this.documentos = this.fb.group({
      certificado_original: [0],
      certificado_tres_copias: [0],
      acta_nacimiento: [0],
      acta_de_nacimiento_tres_copias: [0],
      ine_tres_copias: [0],
      comprobante_de_domicilio: [0]
    });
  }

  guardar(datos: any) {
    console.log(datos);
  }

  regresar() {
    this.route.navigate([""]);
  }

  chage_alumno() {
    console.log("click en ocultar");
    this.alumno_prepa = !this.alumno_prepa;
    console.log("alumno prepa ");
    if (this.alumno_prepa) {
      this.tipoAlumno = " de Prepatoria";
      this.nameButton = "Universidad";
      this.tipo = "Universidad";
    } else {
      this.tipo = "Preparatoria";
      this.tipoAlumno = "de Universidad";
      this.nameButton = "Prepatoria";
    }
    console.log(this.alumno_prepa)
  }

  registrar(datos_personales_value: any, datos_escuela_value: any, documentos_value: any) {
    console.log(datos_personales_value);
    console.log(datos_escuela_value);
    console.log(documentos_value);

    if(documentos_value.certificado_original){
      documentos_value.certificado_original = 1;
    }else if(!documentos_value.certificado_original){
      documentos_value.certificado_original = 0;
    }

    if(documentos_value.certificado_tres_copias){
      documentos_value.certificado_tres_copias = 1;
    }else if(!documentos_value.certificado_tres_copias){
      documentos_value.certificado_tres_copias = 0;
    }

    if(documentos_value.acta_nacimiento){
      documentos_value.acta_nacimiento = 1;
    }else if (!documentos_value.acta_nacimiento){
      documentos_value.acta_nacimiento = 0;
    }

    if(documentos_value.acta_de_nacimiento_tres_copias){
      documentos_value.acta_de_nacimiento_tres_copias = 1;
    }else if(!documentos_value.acta_de_nacimiento_tres_copias){
      documentos_value.acta_de_nacimiento_tres_copias = 0;
    }

    if(documentos_value.ine_tres_copias){
      documentos_value.ine_tres_copias = 1;
    }else if (!documentos_value.ine_tres_copias){
      documentos_value.ine_tres_copias = 0;
    }

    if(documentos_value.comprobante_de_domicilio){
      documentos_value.comprobante_de_domicilio = 1;
    }else if (!documentos_value.comprobante_de_domicilio){
      documentos_value.comprobante_de_domicilio = 0;
    }

    const formulario_alumno = {
      tipo: this.tipo,
      nombre: datos_personales_value.nombre,
      apellidopaterno: datos_personales_value.apellidopaterno,
      apellidomaterno: datos_personales_value.apellidomaterno,
      tutor: datos_personales_value.tutor,
      curp: datos_personales_value.curp,
      fechadenacimiento: datos_personales_value.fechadenacimiento,
      edad: datos_personales_value.edad,
      sexo: datos_personales_value.sexo,
      direccion: datos_personales_value.direccion,
      municipio: datos_personales_value.municipio,
      telefono: datos_personales_value.telefono,
      matricula: datos_escuela_value.matricula,
      carrera: datos_escuela_value.carrera,
      grupo: datos_escuela_value.grupo,
      estado: datos_escuela_value.estado,
      folio_certificado: datos_escuela_value.folio_certificado,
      modalidad: datos_escuela_value.modalidad,
      certificado_original: documentos_value.certificado_original,
      certificado_tres_copias: documentos_value.certificado_tres_copias,
      acta_nacimiento: documentos_value.acta_nacimiento,
      acta_de_nacimiento_tres_copias: documentos_value.acta_de_nacimiento_tres_copias,
      ine_tres_copias: documentos_value.ine_tres_copias,
      comprobante_de_domicilio: documentos_value.comprobante_de_domicilio
    }
    console.log("tipo " + this.tipo)
    this.api.agregarAlumno(formulario_alumno).subscribe(response => {
      console.log("ALUMNO REGISTRADO");
      Swal.fire({
        title: 'Registro guardado!',
        text: 'Alumno registrado con exito.',
        confirmButtonText: 'OK',
        type: 'success'
      }).then((restult) => {
      })
    }, err => {
      console.log("UPS!");
      console.log(err.error)
    })

    console.log("ESTE ES EL FORMULARIO");
    console.log(formulario_alumno)


  }



}
