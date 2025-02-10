import { Component } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    templateUrl: './data-binding.component.html',
    styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
    url: string = 'http://loiane.com';
    cursoAngular: boolean = true;
    urlImagem: string = 'https://picsum.photos/200/300';

    valorAtual: string = '';
    valorSalvo: string = '';

    isMouseOver: boolean = false;

    nome: string = 'abc';

    pessoa: any = {
        nome: 'def',
        idade: 20
    };

    nomeDoCurso: string = 'Angular';

    valorInicial: number = 15;

    getValor() {
        return 1;
    };

    getCurtirCurso() {
        return true;
    }

    botaoClicado() {
        alert("Botão clicado")
    }

    onKeyUp(event: KeyboardEvent) {
        this.valorAtual = (<HTMLInputElement>event.target).value
    }

    salvarValor(valor: any) {
        this.valorSalvo = valor.value;
    }

    onMouseOverOut() {
        this.isMouseOver = !this.isMouseOver;
    }

    onMudouValor(evento: any) {
        console.log(evento);
    }

    constructor() { }

}
