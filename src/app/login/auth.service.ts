import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'usuario@gmail.com' && usuario.senha === '123456'){
      this.usuarioAutenticado = true;
      
      this.mostrarMenuEmitter.emit(true); //emite o true
      this.router.navigate(['/'])//ara a homepage
    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
