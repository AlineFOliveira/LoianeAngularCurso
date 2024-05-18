import { Component } from '@angular/core';
import { CursosService } from '../cursos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.scss'
})
export class CursoDetalheComponent {
  id: number = 0;
  inscricao!: Subscription;
  curso: any;
  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService
  ){

  }
  ngOnInit(){
    this.inscricao = this.route.params.subscribe(
      (params:any) =>{
        this.id = params['id'];

        this.curso = this.cursosService.getCurso(this.id);
      }
    )
  }
  
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
