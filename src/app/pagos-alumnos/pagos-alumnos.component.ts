import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-pagos-alumnos',
  templateUrl: './pagos-alumnos.component.html',
  styleUrls: ['./pagos-alumnos.component.css']
})
export class PagosAlumnosComponent implements OnInit {
  pagos: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.verPagos().subscribe(response => {
      this.pagos = response;
      console.log(response)
    }, err => {
      console.log(err.error)
    })
  }

}
