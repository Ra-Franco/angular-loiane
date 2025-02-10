import {ActivatedRouteSnapshot, CanActivateChild, GuardResult, MaybeAsync, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class CursosGuard implements CanActivateChild
{

  constructor() {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    console.log("Guarda rota filha");

    return true;
  }
}
