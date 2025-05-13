import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  constructor(private http: HttpClient) { }

  verificarEmail(email: string) {
    return this.http.get('assets/dados/verificarEmail.json')
      .pipe(
        map((res: any) => {
          console.log(res)
          return res.emails;
        }),
        tap(console.log),
        map((dados: any) => dados.filter((v: any) => {
          console.log(v)
          return v.email === email
        })),
        tap(console.log),
        map((dados: any[]) => dados.length > 0),
        tap(console.log)
      );
  }

}
