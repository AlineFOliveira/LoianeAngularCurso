import { Injectable } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return true;
}
