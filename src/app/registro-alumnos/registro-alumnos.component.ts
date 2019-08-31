import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  mensaje_error: any;

  private gruposPrepa: any = [];
  private gruposUniversidad: any = [];

  tipo = 'Preparatoria';
  tipoAlumno = 'Preparatoria';
  nameButton = 'Universidad';

  alumno_prepa = true;
  isEditable = true;
  datos_personales: FormGroup;
  datos_escuela: FormGroup;
  documentos: FormGroup;
  constructor(private route: Router, private fb: FormBuilder, private api: ApiService) { }

  ngOnInit() {
    this.api.verCarreras().subscribe(response => {
      this.carreras = response;
    });

    this.api.verAulas().subscribe(response => {

      this.grupos = response;
      for (let i of this.grupos) {
        if (i.tipo == 'Universidad') {
          this.gruposUniversidad.push(i);
        } else {
          this.gruposPrepa.push(i);
        }
      }

      if (this.alumno_prepa) {
        this.grupos = this.gruposPrepa;
      } else {
        this.grupos = this.gruposUniversidad;
      }

    });

    this.datos_personales = this.fb.group({
      nombre: ['', Validators.required],
      apellidopaterno: ['', Validators.required],
      apellidomaterno: ['', Validators.required],
      tutor: [null, Validators.required],
      curp: ['', Validators.required],
      fechadenacimiento: ['', Validators.required],
      edad: ['', Validators.required],
      sexo: ['', Validators.required],
      direccion: ['', Validators.required],
      municipio: ['', Validators.required],
      telefono: ['', Validators.required]
    });

    this.datos_escuela = this.fb.group({
      matricula: ['', Validators.required],
      carrera: [''],
      grupo: ['', Validators.required],
      estado: ['activo', Validators.required],
      folio_certificado: ['', Validators.required],
      modalidad: ['', Validators.required],
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

  regresar() {
    this.route.navigate([""]);
  }

  chage_alumno() {
    this.alumno_prepa = !this.alumno_prepa;
    if (this.alumno_prepa) {
      this.tipoAlumno = " de Prepatoria";
      this.nameButton = "Universidad";
      this.tipo = "Preparatoria";
      this.grupos = this.gruposPrepa;
      this.ngOnInit();
    } else {
      this.tipo = "Universidad";
      this.tipoAlumno = "de Universidad";
      this.nameButton = "Prepatoria";
      this.grupos = this.gruposUniversidad;
      this.ngOnInit();
    }

  }

  registrar(datos_personales_value: any, datos_escuela_value: any, documentos_value: any) {
    if (documentos_value.certificado_original) {
      documentos_value.certificado_original = 1;
    } else if (!documentos_value.certificado_original) {
      documentos_value.certificado_original = 0;
    }

    if (documentos_value.certificado_tres_copias) {
      documentos_value.certificado_tres_copias = 1;
    } else if (!documentos_value.certificado_tres_copias) {
      documentos_value.certificado_tres_copias = 0;
    }

    if (documentos_value.acta_nacimiento) {
      documentos_value.acta_nacimiento = 1;
    } else if (!documentos_value.acta_nacimiento) {
      documentos_value.acta_nacimiento = 0;
    }

    if (documentos_value.acta_de_nacimiento_tres_copias) {
      documentos_value.acta_de_nacimiento_tres_copias = 1;
    } else if (!documentos_value.acta_de_nacimiento_tres_copias) {
      documentos_value.acta_de_nacimiento_tres_copias = 0;
    }

    if (documentos_value.ine_tres_copias) {
      documentos_value.ine_tres_copias = 1;
    } else if (!documentos_value.ine_tres_copias) {
      documentos_value.ine_tres_copias = 0;
    }

    if (documentos_value.comprobante_de_domicilio) {
      documentos_value.comprobante_de_domicilio = 1;
    } else if (!documentos_value.comprobante_de_domicilio) {
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
      estado: 'activo',
      folio_certificado: datos_escuela_value.folio_certificado,
      modalidad: datos_escuela_value.modalidad,
      certificado_original: documentos_value.certificado_original,
      certificado_tres_copias: documentos_value.certificado_tres_copias,
      acta_nacimiento: documentos_value.acta_nacimiento,
      acta_de_nacimiento_tres_copias: documentos_value.acta_de_nacimiento_tres_copias,
      ine_tres_copias: documentos_value.ine_tres_copias,
      comprobante_de_domicilio: documentos_value.comprobante_de_domicilio
    }

    console.log("formulario para agregar:")
    console.log(formulario_alumno)

    this.api.agregarAlumno(formulario_alumno).subscribe(response => {
      Swal.fire({
        title: 'Registro guardado!',
        text: 'Alumno registrado con exito.',
        confirmButtonText: 'OK',
        type: 'success'
      }).then((restult) => {
        this.ngOnInit();
        this.regresar();
      })
    }, (err) => {
      console.log("temp error " + err);
      console.log("UPS!");
      console.log(err.error)
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Llene los campos correctamente'
      })
    });

  }



}
