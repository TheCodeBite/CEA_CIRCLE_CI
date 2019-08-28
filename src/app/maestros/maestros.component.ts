import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiService } from '../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maestros',
  templateUrl: './maestros.component.html',
  styleUrls: ['./maestros.component.css']
})
export class MaestrosComponent implements OnInit {
  maestros: any;
  formulario: FormGroup;
  maestro_name = "";

  constructor(private api: ApiService, private fb: FormBuilder, private route: Router) {
    this.formulario = this.fb.group({
      id: ['', Validators.required],
      apellidopaterno: ['', Validators.required],
      apellidomaterno: ['', Validators.required],
      nombre: ['', Validators.required],
      fechadenacimiento: ['', Validators.required],
      edad: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      sexo: ['', Validators.required],
      tituloprofesional: ['', Validators.required],
      cedulaprofesional: ['', Validators.required],
      institucioneducativa: ['', Validators.required],
      tipo: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.api.verMaestros('activo').subscribe(response => {
      this.maestros = response;
      console.log(this.maestros)
    })
  }

  editar(maestro: any) {
    this.maestro_name = maestro.nombre + " " + maestro.apellidopaterno;
    this.formulario = this.fb.group({
      id: [maestro.id, Validators.required],
      apellidopaterno: [maestro.apellidopaterno, Validators.required],
      apellidomaterno: [maestro.apellidomaterno, Validators.required],
      nombre: [maestro.nombre, Validators.required],
      fechadenacimiento: [maestro.fechadenacimiento, Validators.required],
      edad: [maestro.edad, Validators.required],
      correo: [maestro.correo, Validators.required],
      telefono: [maestro.telefono, Validators.required],
      direccion: [maestro.direccion, Validators.required],
      sexo: [maestro.sexo, Validators.required],
      tituloprofesional: [maestro.tituloprofesional, Validators.required],
      cedulaprofesional: [maestro.cedulaprofesional, Validators.required],
      institucioneducativa: [maestro.tituloprofesional, Validators.required],
      tipo: [maestro.tipo, Validators.required],
      estado: [maestro.estado, Validators.required]
    });

    console.log("Formulario es este we");
    console.log(this.formulario.value);

  }

  guardar(form: any) {

    this.api.editarMaestro(form.id, form).subscribe(response => {
      console.log("maestro editado con exito!");
      Swal.fire({
        title: 'Editado con exito!',
        text: 'Los datos han sido cambiado exitosamente.',
        confirmButtonText: 'OK',
        type: 'success'
      }).then((restult) => {
        this.ngOnInit();
      });
    }, err => {
      console.log("UPS! ");
      console.log(err.error)
    })

  }


  eliminar(valor: any) {
    console.log(valor.estado)
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: "Se eliminara completamente al maestro ...!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí!',
      cancelButtonText: 'No!',
      reverseButtons: true
    }).then((result) => {

      if (result.value) {
        valor.estado = "inactivo";
        this.api.editarMaestro(valor.id, valor).subscribe(response => {
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'Maestro Eliminado',
            'success'
          )
          this.ngOnInit();
        })

      } else if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Imaginaba que lo necesitarias :)',
          'error'
        )
      }
    })
  }
}
