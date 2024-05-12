import { Component } from '@angular/core';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  cursos: string[] = ['Angular', 'Java', 'Outro'];
  cursoService: any; //não entendi o que ela fez aqui e tava dando erro, vai ficar como any mesmo

  //injetando aqui
  constructor(_cursoService: CursoService){
    //salva ali como se fosse um 'clone' ou algo parecido
    this.cursoService = _cursoService;

  }
}
