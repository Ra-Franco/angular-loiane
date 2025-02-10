import {EventEmitter, Injectable} from '@angular/core';
import {Usuario} from "./usuario";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenunEmitter = new EventEmitter<boolean>;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if (usuario.nome == 'usuario' && usuario.senha == '123456'){
      this.usuarioAutenticado = true;

      this.mostrarMenunEmitter.emit(true);

      this.router.navigate(['/'])
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenunEmitter.emit(false);
    }
  }

  estaAutenticado() {
    return this.usuarioAutenticado;
  }

}
