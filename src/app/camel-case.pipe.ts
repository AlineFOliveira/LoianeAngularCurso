import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    //o split separa todas as palavras pelo que for passado, ali vai separar por espaço
    let values = value.split(' ');
    let result = '';

    for(let v of values){
      result += this.capitalize(v) + ' '; //capitalismo no v
    }
    return result;
  }

  capitalize(value: string){
    //string.substring(startIndex, endIndex) lembrar
    //o startIndex é onde a extração começa e o outro é onde termina
    //pega a primeira letra 
    return value.substring(0,1).toUpperCase() + value.substring(1).toLowerCase();  //aqui pega o restante depois da primeira letra
  }

}
