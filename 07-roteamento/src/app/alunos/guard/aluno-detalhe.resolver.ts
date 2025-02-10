import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Aluno} from "../aluno";
import {AlunosService} from "../alunos.service";

import {Observable} from "rxjs";

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {

  constructor(private alunosService: AlunosService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {
    console.log("AlunoDetalheResolve")
    let id = route.params['id'];
    return this.alunosService.getAluno(id);
  }
}
