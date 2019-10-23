import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { CursoAgregarComponent } from './curso-agregar/curso-agregar.component';
import { CursoEditarComponent } from './curso-editar/curso-editar.component';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';

const routes: Routes = [
  {
    path:'curs',
    component:CursosComponent,
    data:{title:'Lista de Cursos'}
  },
  {
    path:'cursDet/:id',
    component:CursoDetalleComponent,
    data:{title:'Detalle'}
  },
  {
    path:'cursAgr',
    component:CursoAgregarComponent,
    data:{title:'Agregar Productos'}
  },
  {
    path:'cursEd/:id',
    component:CursoEditarComponent,
    data:{title:'Editar curso'}
  },
  {
    path:'',
    redirectTo:'/curs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
