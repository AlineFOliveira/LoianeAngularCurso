import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RotasMainComponent } from './rotas-main/rotas-main.component';
import { RotasTesteComponent } from './rotas-teste/rotas-teste.component';

const routes: Routes = [
  {path: '', component: RotasMainComponent},
  {path: 'exercícios', component: RotasMainComponent},
  {path: 'rotas-teste', component: RotasTesteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
