import { Component } from '@angular/core';
import { CursoService } from '../cursos/curso.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrl: './receber-curso-criado.component.scss'
})
export class ReceberCursoCriadoComponent {
  curso: string = '';

  constructor(private cursoService: CursoService){

  }

  ngOnInit(){
    this.cursoService.emitirCursoCriado.subscribe(
      (cursoCriado: any) => this.curso = cursoCriado
    )
  }
}
