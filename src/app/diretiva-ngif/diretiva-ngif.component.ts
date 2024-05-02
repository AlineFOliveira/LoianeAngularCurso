import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrl: './diretiva-ngif.component.scss'
})
export class DiretivaNgifComponent {
  cursos: string[] = ["Angular"];
  mostrarCursos: boolean = false;
  constructor(){

  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }


}
