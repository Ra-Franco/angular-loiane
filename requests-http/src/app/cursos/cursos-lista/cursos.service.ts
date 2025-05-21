import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take, tap } from 'rxjs';
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
        delay(2000),
        tap(console.log)
      );
  }

  loadById(id: string) {
    return this.http.get(`${this.API}/${id}`)
      .pipe(take(1));
  }

  create(curso: Curso) {
    return this.http.post(this.API, curso).pipe(take(1));
  }
}
