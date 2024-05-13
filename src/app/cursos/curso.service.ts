import { EventEmitter, Injectable } from "@angular/core";

@Injectable() //para poder instanciar a injeção e etc
export class CursoService {
    private cursos: string[] = ['Angular', 'Java', 'Outro']

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();//compartilhada entre as instancias?
    getCursos(){
        return this.cursos;
    }

    addCurso(curso: string){
        this.cursos.push(curso); //Adiciona um ou mais elementos ao final
        this.emitirCursoCriado.emit(curso);//emite o nome do curso
    }
}