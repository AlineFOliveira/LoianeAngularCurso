import { Component } from '@angular/core';

import { CursoService } from '../cursos/curso.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrl: './criar-curso.component.scss'
})
export class CriarCursoComponent {

  cursos: string[] = [];
  constructor(private cursoService: CursoService){

  }
  ngOnInit(){
    this.cursos = this.cursoService.getCursos();
  }

  onAddCurso(curso: string){
    this.cursoService.addCurso(curso);//chama o addCurso do service
  }

  

}
