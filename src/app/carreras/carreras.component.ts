import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';

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
        console.log("AGREGADO")
        this.ngOnInit();
      })
    }else{
      // se editan cambios 
      this.api.editarCarrera(formulario.id, formulario).subscribe(response => {
        console.log("cambio editado")
        this.ngOnInit();
      });
    }
  }

  iniciarFormulario() {
    this.gurdar = 0;
    this.carreraForm = this.fb.group({
      id: [''],
      nombre: [''],
      nomenclatura: [''],
      tipo: ['UNI']
    });
  }

  editar(formulario: any){
    this.gurdar = 1;
    this.carreraForm = this.fb.group({
      id:[formulario.id],
      nombre: [formulario.nombre],
      nomenclatura: [formulario.nomenclatura],
      tipo: [formulario.tipo]
    });
  }


}
