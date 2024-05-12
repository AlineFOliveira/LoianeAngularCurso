import { Injectable } from "@angular/core";

@Injectable() //para poder instanciar a injeção e etc
export class CursoService {
    getCursos(){
        return ['Angular', 'Java', 'Outro'];
    }
}