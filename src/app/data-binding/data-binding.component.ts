import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
  
})
export class DataBindingComponent {

  valorAtual: string = '';
  valorSalvo = '';
  isMouseOver: boolean = false;
  nome: string = 'Abc';
  pessoa: any ={
    nome: 'afgafa',
    idade: 81

  }

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;


  botaoClicado(){
    alert('Botão clicado!')
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (evento.target as HTMLInputElement).value;
  }
  
  salvarValor(valor: any){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    /**Vai negar o valor já salvo */
    this.isMouseOver = !this.isMouseOver;

  }


  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }
}
