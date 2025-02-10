import {ActivatedRouteSnapshot, CanActivateChild, GuardResult, MaybeAsync, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class AlunosGuard implements CanActivateChild
{

  constructor() {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.log("AlunosGuard: Guarda rota filha");
    // if (state.url.includes("editar")){
    //   return false;
    // }

    return true;
  }
}
