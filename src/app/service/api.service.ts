import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url="http://127.0.0.1:8000/api/v1/";
  constructor(private http: HttpClient) { }

//Alumnos
  verAlumnos(params: any) {
    return this.http.get(this.url+'alumnos/estado/' + params );
  }
  verAlumno(id:any){
    return this.http.get(this.url+'alumnos/'+id+"/");
  }
  agregarAlumno(params:any) {
    return this.http.post(this.url+'alumnos/',params);
  }
  editarAlumno(params:any, id:any) {
    return this.http.put(this.url+'alumnos/' + id, params);
  }

  pagosAlumnos(params: any){
    return this.http.post(this.url + 'pagoAlumnos/',params);
  }
  BuscarAlumnos(matricula) {
    return this.http.get(this.url+'alumnos/buscador/'+matricula+"/");
  }
 //Maestros
  verMaestros(estado:any) {
    return this.http.get(this.url+'maestros/estado/' + estado);
  }
  verMaestro(id:any){
    return this.http.get(this.url+'maestros/'+id+"/");
  }
  agregarMaestro(params:any) {
    return this.http.post(this.url+'maestros/',params);
  }
  editarMaestro(id: any, params:any) {
    return this.http.put(this.url + 'maestros/' + id + "/", params);
  }

  //GRUPOS
  verAulas(){
    return this.http.get(this.url +  "grupos/");  
  }
  agregarAulas(params){
    return this.http.post(this.url + 'grupos/', params);
  }
  editarAula(id: any, params:any) {
    return this.http.put(this.url + 'grupos/' + id + "/", params);
  }

  //CARRERAS

  verCarreras(){
    return this.http.get(this.url + "carreras/")
  }

  agregarCarreras(params: any) { 
    return this.http.post(this.url + 'carreras/', params); 
  }
  editarCarrera(id: any, params: any){
    return this.http.put(this.url + "carreras/" + id, params);
  }
  
  //Calificaciones
  verCalificaciones(id){
    return this.http.get(this.url + "calificaciones/"+id+"/");
  }
  agregarCalificacion(params: any){
    return this.http.post(this.url + 'calificaciones/', params); 
  }
  
  //MATERIAS
  verMateriasAsignadas(fecha:any,tipo:any){
    return this.http.get(this.url + "materiasAsignadas/calificaciones/"+fecha+"/"+tipo+"/");
  }

  agregarMateriasAsignadas(paramas: any){
    return this.http.post(this.url + "materiasAsignadas/", paramas);
  }
  verMaterias(){
    return this.http.get(this.url + "materias/");
  }

  agregarMaterias(paramas: any){
    return this.http.post(this.url + "materias/", paramas);
  }

  //Pagos
  agregaPagoMaestro(params: any){
    return this.http.post(this.url + "pagoMaestros/",params)
  }

  verPagos(){
    return this.http.get(this.url + "pagoAlumnos/");
  }

  verPagosMaestros(){
    return this.http.get(this.url + "materiasAsignadas/");
  }

  

  actualizarPagoAlumnos(params: any, id: any){
    return this.http.put(this.url + "pagoAlumnos/" + id + "/", params);
  }
}
