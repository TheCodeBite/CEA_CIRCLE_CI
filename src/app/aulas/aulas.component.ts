import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit {
  formulario: FormGroup;
  listaAulas: any;
  constructor(private api: ApiService, private fb: FormBuilder) { 
    this.formulario = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.verAulas();
  }
  verAulas(){
    this.api.verAulas().subscribe(response => {
      this.listaAulas = response;
      console.log(this.listaAulas)
    })
  }
  agregar(aula){
    this.api.agregarAulas(aula).subscribe(response => {
      console.log("aula agregado con exito!");
      Swal.fire({
        title: 'Agregado con exito!',
        text: 'La aula se agrego correctamente.',
        confirmButtonText: 'OK',
        type: 'success'
      }).then((restult) => {
        this.ngOnInit();
      });
    })
  }

  editar(aula) {
    this.formulario = this.fb.group({
      id: [aula.id, Validators.required],
      nombre: [aula.nombre, Validators.required]
    });
  }

  guardar(form: any) {
    console.log(form)
    this.api.editarAula(form.id, form).subscribe(response => {
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
}
