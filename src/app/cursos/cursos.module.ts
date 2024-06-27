import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoService } from './curso.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CursosComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule

    
  ],
  providers:[
    CursoService
  ],
  exports:[
    CursosComponent
  ]
})
export class CursosModule { }
