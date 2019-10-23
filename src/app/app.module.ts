import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';
import { CursoAgregarComponent } from './curso-agregar/curso-agregar.component';
import { CursoEditarComponent } from './curso-editar/curso-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    CursosComponent,
    CursoDetalleComponent,
    CursoAgregarComponent,
    CursoEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
