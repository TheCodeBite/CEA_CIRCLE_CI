import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pagos-alumnos',
  templateUrl: './pagos-alumnos.component.html',
  styleUrls: ['./pagos-alumnos.component.css']
})
export class PagosAlumnosComponent implements OnInit {
  pagos: any;

  formulario_pago: FormGroup;
  constructor(private api: ApiService, private fb: FormBuilder) { 

    this.formulario_pago = this.fb.group({
      fecha: [''],
      pago: [],
      tipo: [],
      costo: [],
      restante: [],
      alumno: [],
      abono: [0.0]
    });

  }
  

  ngOnInit() {
    this.api.verPagos().subscribe(response => {
      this.pagos = response;
      console.log(response)
    }, err => {
      console.log(err.error)
    })
  }

  abonar(pago: any){
    this.formulario_pago = this.fb.group({
      id: [pago.id],
      fecha: [pago.fecha],
      pago: [pago.pago],
      tipo: [pago.tipo],
      costo: [pago.costo],
      restante: [pago.restante],
      alumno: [pago.alumno],
      abono: [pago.restante]
    });
  }

  botonPagar(formulario: any){

    const form = {
      fecha: formulario.fecha,
      pago: (formulario.pago + formulario.abono),
      tipo: formulario.tipo,
      costo: formulario.costo,
      restante: (formulario.restante - formulario.abono),
      alumno: formulario.alumno
    }

    console.log(form)

    this.api.actualizarPagoAlumnos(form, formulario.id).subscribe(response => {
      console.log("cambios realizados");
      this.ngOnInit();
    })

  }

}
