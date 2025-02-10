import { Component } from '@angular/core';
import {AuthService} from "./login/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = '07-roteamento';

    mostrarMenu: boolean = false;

    constructor(private authService: AuthService) {

    }

    ngOnInit(){
      this.authService.mostrarMenunEmitter.subscribe(
        mostrar => this.mostrarMenu = mostrar
      );
    }
}
