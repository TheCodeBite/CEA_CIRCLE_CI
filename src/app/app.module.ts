import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { Page404Component } from './page404/page404.component';
import { RegistroAlumnosComponent } from './registro-alumnos/registro-alumnos.component';
import { RegistroMaestroComponent } from './registro-maestro/registro-maestro.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    Page404Component,
    RegistroAlumnosComponent,
    RegistroMaestroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
