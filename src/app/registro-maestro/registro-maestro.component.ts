import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Maestro } from '../Interfaces/maestro';

@Component({
  selector: 'app-registro-maestro',
  templateUrl: './registro-maestro.component.html',
  styleUrls: ['./registro-maestro.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class RegistroMaestroComponent implements OnInit {
  formulario: FormGroup;
  isEditable = true;

  constructor(private maestro_interface: Maestro, private route:Router, private fb:FormBuilder) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      datosPersonales:this.fb.group({
        apellidopaterno: ['',Validators.required],
        apellidomaterno: ['',Validators.required],
        nombre: ['', Validators.required],
        fechadenacimiento: ['', Validators.required],
        edad: ['', Validators.required],
        correo: ['', Validators.required],
        telefono: ['', Validators.required],
        direccion: ['', Validators.required],
        sexo: ['', Validators.required]
      }),
      informacionAcademica:this.fb.group({
        tituloprofesional: ['',Validators.required],
        cedulaprofesional: ['',Validators.required],
        institucioneducativa: ['',Validators.required],
        tipo: ['']
      })
    });

  }

  save(datos: any){
    console.log("guardando datos del profesor..");
    console.log(datos);
  }

  cancel(){
    this.route.navigate(['']);
  }
}
