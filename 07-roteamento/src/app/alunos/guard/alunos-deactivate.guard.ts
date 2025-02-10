import {Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot
} from "@angular/router";
import {AlunoFormularioComponent} from "../aluno-formulario/aluno-formulario.component";
import {Observable} from "rxjs";
import {IFormCandeactivate} from "../../guard/form-candeactivate";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCandeactivate> {

    canDeactivate(component: IFormCandeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean> | boolean
    {
      console.log("Guarda desativação");

      return component.podeDesativar();
    }

}
