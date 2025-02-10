import { Component } from '@angular/core';

@Component({
    selector: 'app-diretivas-customizadas',
    templateUrl: './diretivas-customizadas.component.html',
    styleUrl: './diretivas-customizadas.component.css'
})
export class DiretivasCustomizadasComponent {

    mostrarCursos = false;

    onMostrarCursos() {
        this.mostrarCursos = !this.mostrarCursos;
    }

}
