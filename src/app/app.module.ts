import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { Page404Component } from './page404/page404.component';
import { RegistroAlumnosComponent } from './registro-alumnos/registro-alumnos.component';
import { RegistroMaestroComponent } from './registro-maestro/registro-maestro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule, MatIconModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule} from '@angular/material/core';
import { MaestrosComponent } from './maestros/maestros.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { AulasComponent } from './aulas/aulas.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { PagosAlumnosComponent } from './pagos-alumnos/pagos-alumnos.component';
import { PagosMaestrosComponent } from './pagos-maestros/pagos-maestros.component';
import { MateriasComponent } from './materias/materias.component';
import { MateriasAsignadasComponent } from './materias-asignadas/materias-asignadas.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    Page404Component,
    RegistroAlumnosComponent,
    RegistroMaestroComponent,
    MaestrosComponent,
    AlumnosComponent,
    AulasComponent,
    CarrerasComponent,
    PagosAlumnosComponent,
    PagosMaestrosComponent,
    MateriasComponent,
    MateriasAsignadasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    HttpClientModule,
    MatCheckboxModule,
    MatStepperModule,
    MatIconModule,
    MatNativeDateModule,
    MatDialogModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
