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

  objeto: any;
  pagos: any;
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

      console.log(this.show)
    });
  }

  btnPagar(form: any){
    this.objeto = form;
    this.id_maestro = form.maestro;
    this.pagoFormulario = this.fb.group({
      horas_semanales: form.horas_semanales,
      pago_hora: ['']
    })
    
  }

  Pagar(form: any){
    const pay = {
      maestro: this.id_maestro,
      pago: (form.horas_semanales * form.pago_hora)
    }

    this.api.agregaPagoMaestro(pay).subscribe(response =>{
      console.log("pago realizado con exito");
      this.ngOnInit();
      this.objeto.pagado = true;
      

    },err =>{
      console.log(err.error);
      
    });

    console.log(pay)
  }

}
