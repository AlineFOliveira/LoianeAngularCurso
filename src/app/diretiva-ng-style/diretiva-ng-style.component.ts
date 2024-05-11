import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-style',
  templateUrl: './diretiva-ng-style.component.html',
  styleUrl: './diretiva-ng-style.component.scss'
})
export class DiretivaNgStyleComponent {
  ativo: boolean = false;
  tamanhoFonte: number = 20;

  mudarAtivo(){
    //nega o valor estabelecido antes
    this.ativo = !this.ativo;
  }
}
