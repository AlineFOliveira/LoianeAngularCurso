import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RotasMainComponent } from './rotas-main/rotas-main.component';
import { RotasTesteComponent } from './rotas-teste/rotas-teste.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: '', component: RotasMainComponent, canActivate[authGuard]},//de novo incompatibilidde de versões
  {path: 'exercícios', component: RotasMainComponent},
  {path: 'rotas-teste', component: RotasTesteComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
