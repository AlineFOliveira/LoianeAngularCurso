import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-diretiva-ng-for',
  templateUrl: './diretiva-ng-for.component.html',
  styleUrl: './diretiva-ng-for.component.scss'
})
export class DiretivaNgForComponent {
  cursos: string[] = ["Angular", "Java", "Phonegap"]

  ngOnInit(){
    /* Cria a variável i que, se i for menor que o tamanho do objeto/array?, aumenta seu valor a cada passagem do loop */
    for (let i=0; i<this.cursos.length; i++){
      /* i vai ser o numero de cada item */
      let curso = this.cursos[i];

      /*console.log(this.cursos);*/
    }
  }
}
