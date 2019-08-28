import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  nombre = "Universidad"
  tipo = "UNI";

  id_materia = 0;

  maestros_uni: any = [];
  maestros_prepa: any = [];
  maestros_show: any;
  
  materias: any;
  maestros: any;
  carreras: any;

  materias_show: any;
  materias_universidad: any = [];
  materias_preparatoria: any = [];

  universidad = true;

  asignar_materia_formulario: FormGroup; 
  materia_formulario : FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit() {

    this.asignar_materia_formulario = this.fb.group({
      inicio_modulo: [''],
      fin_modulo: [''],
      maestro: [''],
      materia: [''],
      horas_semanales: ['']
    })

    this.api.verMaestros('activo').subscribe(response => {
      this.maestros = response;
      
      this.maestros_prepa = []; 
      this.maestros_uni = [];

      for(let i of this.maestros){
        if(i.tipo == "Universidad"){
          this.maestros_uni.push(i)
        }else if(i.tipo == "Preparatoria"){
          this.maestros_prepa.push(i);
        }else{
          this.maestros_uni.push(i)
          this.maestros_prepa.push(i)
        }
      }

      if(this.universidad){
        this.maestros_show = this.maestros_uni;
      }else{
        this.maestros_show = this.maestros_prepa;
      }

      console.log(this.maestros_show)
    })

    this.iniciarFormulario(); 
    this.api.verCarreras().subscribe(response =>{
      this.carreras = response;
    });

    this.api.verMaterias().subscribe(response => {
      this.materias = response;

      this.materias_universidad = [];
      this.materias_preparatoria = [];
      this.materias_show = [];

      for(let i of this.materias){
        if(i.tipo == "UNI"){
          this.materias_universidad.push(i);
        }else if(i.tipo == "PREPA"){
          this.materias_preparatoria.push(i);
        }
      }
      if(this.universidad){ this.materias_show = this.materias_universidad;}else{this.materias_show = this.materias_preparatoria}
    });

   
  }

  insertMateriasAsignadas(form: any){
    form.materia=this.id_materia;
    console.log(form)

    this.api.agregarMateriasAsignadas(form).subscribe(response =>{
      console.log("GUARDADO EXITOSO")
      this.ngOnInit();
    })
  }

  btnAsignar(model: any){
    this.id_materia = model;
  }

  iniciarFormulario(){
    this.materia_formulario = this.fb.group({
      nombre: [null,Validators.required],
      semestre: [null,Validators.required],
      carrera: [null],
      tipo: this.tipo
    });
  }

  cambio(){
    if(this.universidad == true){this.tipo = "PREPA"; this.nombre = "Preparatoria"} else {this.tipo = "UNI"; this.nombre = "Universidad"}
    this.universidad = !this.universidad;
    this.ngOnInit();
  }

  registarMateria(form:any){
    this.api.agregarMaterias(form).subscribe(response => {
      console.log("Materia agregada")
      this.ngOnInit();
    })
  }

}
