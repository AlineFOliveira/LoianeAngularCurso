import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { CursoService } from '../cursos/curso.service';
import { CriarCursoComponent } from './criar-curso.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';




@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CursoService],
  exports: [CriarCursoComponent]
})
export class CriarCursoModule { }
