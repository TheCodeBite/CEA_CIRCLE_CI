import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pagos-maestros',
  templateUrl: './pagos-maestros.component.html',
  styleUrls: ['./pagos-maestros.component.css']
})
export class PagosMaestrosComponent implements OnInit {
  pagoFormulario: FormGroup;

  pagos: any;

  teacher_object: any;
  show: any = [];
  id_maestro = "";

  constructor(private api: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.pagoFormulario = this.fb.group({
      horas_semanales: [''],
      pago_hora: ['']
    })

    this.api.verPagosMaestros().subscribe(response => {
      this.pagos = response;
      this.show = [];
      for(let i of this.pagos){
        if(!i.pagado){
          this.show.push(i)
        }
      }
    });
  }

  btnPagar(form: any){
    this.teacher_object = form;
    this.id_maestro = form.maestro;
    this.pagoFormulario = this.fb.group({
      horas_semanales: form.horas_semanales,
      pago_hora: ['']
    })
    
  }

  Pagar(form: any, maestro:any){
    const pay = {
      maestro: this.id_maestro,
      pago: (form.horas_semanales * form.pago_hora)
    }

    this.teacher_object.pagado = true;
    this.api.pagarMaestro(this.teacher_object, this.teacher_object.id).subscribe(response => {
      console.log("pagado XD")
    })

    this.api.agregaPagoMaestro(pay).subscribe(() =>{
      console.log("pago realizado con exito");
      this.ngOnInit();
    },err =>{
      console.log(err.error);
      
    });

  }

}
