import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrl: './exemplos-pipes.component.scss'
})
export class ExemplosPipesComponent {
  livro: any = {
    titulo: 'Learning javaScript',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'

  };

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assincrono depois de 2 segundos'), 2000)//depois de dois segundos vai ser atribuido o valor
  });

}
