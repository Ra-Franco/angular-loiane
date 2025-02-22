import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { EstadoBr } from '../models/EstadoBr';
import { Observable, of } from 'rxjs';
import { Cargo } from '../models/Cargo';
import { Tecnologia } from '../models/Tecnologia';
import { Newsletter } from '../models/Cargo copy';


@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }


  getEstadosBr(): Observable<EstadoBr[]> {
    return this.http.get<EstadoBr[]>('/assets/dados/estadosbr.json')
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getCargos(): Observable<Cargo[]> {
    return of([
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' }
    ]).pipe(
      map((res) => {
        return res;
      })
    )
  }

  getTecnologias(): Observable<Tecnologia[]> {
    return of([
      { nome: 'Java', desc: 'Java' },
      { nome: 'JavaScript', desc: 'JS' },
      { nome: 'PHP', desc: 'PHP' },
      { nome: 'Ruby', desc: 'Ruby' },
    ]).pipe(
      map((res) => {
        return res;
      })
    )
  }
  getNewsletter(): Observable<Newsletter[]> {
    return of([
      { valor: 'S', desc: 'Sim' },
      { valor: 'N', desc: 'Não' },
    ]).pipe(
      map((res) => {
        return res;
      })
    )
  }
}