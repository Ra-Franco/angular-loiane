import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate, CanLoad, CanMatchFn,
  GuardResult,
  MaybeAsync, Route,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../login/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    console.log("AuthGuard")

    return this.verificarAcesso();

  }

  private verificarAcesso(){
    if (this.authService.estaAutenticado()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canMatch(route: Route): Observable<boolean> | boolean | any {
    console.log("Can Match")
    this.verificarAcesso();
  }

}
