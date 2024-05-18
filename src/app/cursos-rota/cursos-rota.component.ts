import { Component } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-rota',
  templateUrl: './cursos-rota.component.html',
  styleUrl: './cursos-rota.component.scss'
})
export class CursosRotaComponent {

  cursos: any = [];
  constructor(private cursosService: CursosService){

  }

  ngOnInit(){
    this.cursos = this.cursosService.getCursos();
  }

}
