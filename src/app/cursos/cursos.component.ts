import { Component } from '@angular/core';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  cursos: string[] = [];
  cursoService: any; //não entendi o que ela fez aqui e tava dando erro, vai ficar como any mesmo

  //injetando aqui
  constructor(_cursoService: CursoService){
    //salva ali como se fosse um 'clone' ou algo parecido
    this.cursoService = _cursoService;

  }

  ngOnInit(){
    this.cursos = this.cursoService.getCursos();
    this.cursoService.emitirCursoCriado.subscribe(//O subscribe faz ser notificado
    (curso: any) => console.log(curso)
    );
  }
}
