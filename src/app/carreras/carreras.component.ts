import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent implements OnInit {
  carreras: any;
  gurdar = 0;

  carreraForm: FormGroup;
  constructor(private api: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.api.verCarreras().subscribe(response => {
      this.carreras = response;
    });

    this.iniciarFormulario();

  }

  save_data(formulario: any){
    if(this.gurdar == 0){
      /// se crea un nuevo usuario
      this.api.agregarCarreras(formulario).subscribe(response => {
        console.log("AGREGADO");
        Swal.fire({
          title: 'Agregado con exito!',
          text: 'La aula se agrego correctamente.',
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
          text:"Llene todos los campos correctamente"
        })
      });
    }else{
      // se editan cambios 
      this.api.editarCarrera(formulario.id, formulario).subscribe(response => {
        console.log("cambio editado")
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
        console.log(err.error);
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Llene los campos correctamente'
        })
      });
    }
  }

  iniciarFormulario() {
    this.gurdar = 0;
    this.carreraForm = this.fb.group({
      id: [''],
      nombre: [''],
      nomenclatura: ['']
    });
  }

  editar(formulario: any){
    this.gurdar = 1;
    this.carreraForm = this.fb.group({
      id:[formulario.id],
      nombre: [formulario.nombre],
      nomenclatura: [formulario.nomenclatura]
    });
  }


}
