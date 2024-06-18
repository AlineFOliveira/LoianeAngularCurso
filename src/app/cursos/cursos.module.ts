import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoService } from './curso.service';



@NgModule({
  declarations: [CursosComponent],
  imports: [
    CommonModule,
    RouterModule

    
  ],
  providers:[
    CursoService
  ],
  exports:[
    CursosComponent
  ]
})
export class CursosModule { }
