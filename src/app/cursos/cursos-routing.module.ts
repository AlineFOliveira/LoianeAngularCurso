import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoDetalheComponent } from '../curso-detalhe/curso-detalhe.component';


const cursosRoutes: Routes = [
  { path: 'curso/:id', component: CursoDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule {
  
 }
