import { Injectable, inject } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';


export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  if(inject(AuthService).usuarioEstaAutenticado()){//injeta ali dentro, ja q o constructor n funciona aqui
    return true;
  }
  
  inject(Router).navigate(['/login']);//para inicializar na tela de login
    return false;
  
}
