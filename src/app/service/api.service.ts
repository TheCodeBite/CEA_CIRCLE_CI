import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url="http://127.0.0.1:8000/api/v1/";
  constructor(private http: HttpClient) { }

//Alumnos
  verAlumnos() {
    return this.http.get(this.url+'alumnos/');
  }
  verAlumno(id:any){
    return this.http.get(this.url+'alumnos/'+id+"/");
  }
  agregarAlumno(params:any) {
    return this.http.post(this.url+'alumnos/',params);
  }
  editarAlumno(params:any, id:any) {
    return this.http.put(this.url+'alumnos/' + id,params);
  }
 //Maestros
  verMaestros() {
    return this.http.get(this.url+'maestros/');
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
  getGrupos(){
    return this.http.get(this.url +  "grupos/");  
  }
}
