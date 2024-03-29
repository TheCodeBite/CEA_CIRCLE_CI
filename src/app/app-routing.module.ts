import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { Page404Component } from './page404/page404.component';
import { RegistroAlumnosComponent } from './registro-alumnos/registro-alumnos.component';
import { RegistroMaestroComponent } from './registro-maestro/registro-maestro.component';
import { MaestrosComponent } from './maestros/maestros.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { AulasComponent } from './aulas/aulas.component';
import { PagosAlumnosComponent } from './pagos-alumnos/pagos-alumnos.component';
import { PagosMaestrosComponent } from './pagos-maestros/pagos-maestros.component';
import { MateriasComponent } from './materias/materias.component';
import { MateriasAsignadasComponent } from './materias-asignadas/materias-asignadas.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';

const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'home', component: IndexComponent},
  {path:'registroAlumnos', component: RegistroAlumnosComponent},
  {path:'registroMaestro', component: RegistroMaestroComponent},
  {path:'listaMaestros', component: MaestrosComponent},
  {path:'listaAlumnos', component: AlumnosComponent},
  {path:'carreras', component: CarrerasComponent},
  {path:'aulas', component: AulasComponent},
  {path:'pagosAlumnos', component: PagosAlumnosComponent},
  {path:'pagosMaestros', component: PagosMaestrosComponent},
  {path:'materias', component: MateriasComponent},
  {path:'materiasAsignadas', component: MateriasAsignadasComponent},
  {path:'calificaciones', component: CalificacionesComponent},
  {path:'**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
