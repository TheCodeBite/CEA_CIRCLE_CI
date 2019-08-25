import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  grupos: any; 
  Alumnos: any;
  carreras: any;

  AlumnosMostrar: any;

  separador = 0;

  alumnosPrepa = [];
  alumnosUni = [];
  alumnosTods = [];

  permisoEditar = true;

  formulario: FormGroup;
  pagoFormulario: FormGroup;
  formTipo: FormGroup;

  alumnotipo = "";
  alumnoname = "";

  constructor(private api: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.AlumnosMostrar = [];
    this.alumnosPrepa = [];
    this.alumnosUni = [];

    this.pagoFormulario = this.fb.group({
      alumno: ['', Validators.required],
      pago: ['', Validators.required],
      tipo: ['', Validators.required],
      costo: ['', Validators.required],
      restante: ['', Validators.required]
    });

    this.formTipo = this.fb.group({
      tipo: ['0']
    });

    this.permisoEditar = true;
    this.formulario = this.fb.group({
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
      telefono: [''],
      matricula: [''],
      carrera: [''],
      grupo: [''],
      estado: [''],
      folio_certificado: [''],
      modalidad: [''],
      certificado_original: [0],
      certificado_tres_copias: [0],
      acta_nacimiento: [0],
      acta_de_nacimiento_tres_copias: [0],
      ine_tres_copias: [0],
      comprobante_de_domicilio: [0],
      tipo: ['']
    });
    const temp = {
      estado: ['activo']
    }
    this.api.verAlumnos(temp).subscribe(response => {
      this.Alumnos = response;


      for (let i of this.Alumnos) {
        if (i.tipo == 'Universidad') {
          this.alumnosUni.push(i);
        } else if (i.tipo == 'Preparatoria') {
          this.alumnosPrepa.push(i)
        }
      }

      if (this.separador == 1) {
        this.AlumnosMostrar = this.alumnosPrepa;
      } else if (this.separador == 2) {
        this.AlumnosMostrar = this.alumnosUni;
      } else if (this.separador == 0) {
        this.AlumnosMostrar = this.Alumnos;
      }
    });

    this.api.verAulas().subscribe(response => {
      this.grupos = response;
    });

    this.api.verCarreras().subscribe(response => {
      this.carreras = response;
    });

  }

  SepararGrupos(value: any) {
    if (value.tipo == '1') {
      this.separador = 1;
      this.ngOnInit();
    } else if (value.tipo == '2') {
      this.separador = 2;
      this.ngOnInit();
    } else if (value.tipo == '0') {
      this.separador = 0;
      this.ngOnInit();
    }
  }

  botonModalPago(idAlumno) {
    this.pagoFormulario = this.fb.group({
      alumno: [idAlumno],
      pago: ['', Validators.required],
      tipo: ['', Validators.required],
      costo: ['', Validators.required],
      restante: ['', Validators.required]
    });
  }

  pagar(form: any) {

    const temp_formpago = {
      alumno: form.alumno,
      pago: form.pago,
      tipo: form.tipo,
      costo: form.costo,
      restante: (form.costo - form.pago)  
    }

    console.log(temp_formpago);
    this.api.pagosAlumnos(temp_formpago).subscribe(response => {
      console.log("pago Realizado con exito");
      Swal.fire({
        title: 'Pago realizado con éxito!',
        text: 'El pago ha sido realizado',
        confirmButtonText: 'OK',
        type: 'success'
      }).then((restult) => {
        this.ngOnInit();
      });
    }, err => {
      console.log(err.error)
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: "Algo ha salido mal"
      })
    });
  }

  botonPermiso() {
    this.permisoEditar = !this.permisoEditar;
  }
  editar(form: any) {
    this.alumnotipo = form.tipo;
    this.alumnoname = form.nombre + " " + form.apellidopaterno
    this.formulario = this.fb.group({
      nombre: [form.nombre],
      apellidopaterno: [form.apellidopaterno],
      apellidomaterno: [form.apellidomaterno],
      tutor: [form.tutor],
      curp: [form.curp],
      fechadenacimiento: [form.fechadenacimiento],
      edad: [form.edad],
      sexo: [form.sexo],
      direccion: [form.direccion],
      municipio: [form.municipio],
      telefono: [form.telefono],
      matricula: [form.matricula],
      carrera: [form.carrera],
      grupo: [form.grupo],
      estado: [form.estado],
      folio_certificado: [form.folio_certificado],
      modalidad: [form.modalidad],
      certificado_original: [form.certificado_original],
      certificado_tres_copias: [form.certificado_tres_copias],
      acta_nacimiento: [form.acta_nacimiento],
      acta_de_nacimiento_tres_copias: [form.acta_de_nacimiento_tres_copias],
      ine_tres_copias: [form.ine_tres_copias],
      comprobante_de_domicilio: [form.comprobante_de_domicilio],
      tipo: [form.tipo],
      id: [form.id]
    });
  }

  guardar(form_value: any) {

    if (form_value.certificado_original) {
      form_value.certificado_original = 1;
    } else if (!form_value.certificado_original) {
      form_value.certificado_original = 0;
    }

    if (form_value.certificado_tres_copias) {
      form_value.certificado_tres_copias = 1;
    } else if (!form_value.certificado_tres_copias) {
      form_value.certificado_tres_copias = 0;
    }

    if (form_value.acta_nacimiento) {
      form_value.acta_nacimiento = 1;
    } else if (!form_value.acta_nacimiento) {
      form_value.acta_nacimiento = 0;
    }

    if (form_value.acta_de_nacimiento_tres_copias) {
      form_value.acta_de_nacimiento_tres_copias = 1;
    } else if (!form_value.acta_de_nacimiento_tres_copias) {
      form_value.acta_de_nacimiento_tres_copias = 0;
    }

    if (form_value.ine_tres_copias) {
      form_value.ine_tres_copias = 1;
    } else if (!form_value.ine_tres_copias) {
      form_value.ine_tres_copias = 0;
    }

    if (form_value.comprobante_de_domicilio) {
      form_value.comprobante_de_domicilio = 1;
    } else if (!form_value.comprobante_de_domicilio) {
      form_value.comprobante_de_domicilio = 0;
    }

    const formulario_alumno = {
      tipo: form_value.tipo,
      nombre: form_value.nombre,
      apellidopaterno: form_value.apellidopaterno,
      apellidomaterno: form_value.apellidomaterno,
      tutor: form_value.tutor,
      curp: form_value.curp,
      fechadenacimiento: form_value.fechadenacimiento,
      edad: form_value.edad,
      sexo: form_value.sexo,
      direccion: form_value.direccion,
      municipio: form_value.municipio,
      telefono: form_value.telefono,
      matricula: form_value.matricula,
      carrera: form_value.carrera,
      grupo: form_value.grupo,
      estado: form_value.estado,
      folio_certificado: form_value.folio_certificado,
      modalidad: form_value.modalidad,
      certificado_original: form_value.certificado_original,
      certificado_tres_copias: form_value.certificado_tres_copias,
      acta_nacimiento: form_value.acta_nacimiento,
      acta_de_nacimiento_tres_copias: form_value.acta_de_nacimiento_tres_copias,
      ine_tres_copias: form_value.ine_tres_copias,
      comprobante_de_domicilio: form_value.comprobante_de_domicilio
    }


    this.api.editarAlumno(form_value, form_value.id).subscribe(response => {
      Swal.fire({
        title: 'Editado con exito!',
        text: 'Los datos han sido cambiado exitosamente.',
        confirmButtonText: 'OK',
        type: 'success'
      }).then((restult) => {
        this.ngOnInit();
      });
      this.ngOnInit();
    }, err => {
      console.log(err.error);
    })
  }


}
