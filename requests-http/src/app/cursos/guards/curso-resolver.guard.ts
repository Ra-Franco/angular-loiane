import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, MaybeAsync, Resolve, RouterStateSnapshot } from '@angular/router';
import { Curso } from '../cursos-lista/curso';
import { CursosService } from '../cursos-lista/cursos.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoResolverGuard implements Resolve<Curso> {

  constructor(private service: CursosService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curso> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    console.log('Criando: ', route.params['id'])
    const curso = { nome: null } as unknown as Curso;
    return of(curso);

  }

};
