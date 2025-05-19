import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, tap } from 'rxjs';
import { Curso } from './curso';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = `${environment.API}cursos`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Curso[]>(this.API)
      .pipe(
        tap(console.log)
      );
  }
}
