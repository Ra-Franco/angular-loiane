import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-exemplos-pipes',
    templateUrl: './exemplos-pipes.component.html',
    styleUrl: './exemplos-pipes.component.scss'
})
export class ExemplosPipesComponent implements OnInit {
    filtro = '';
    livros: string[] = ['Java', 'Angular 2'];

    livro: any = {
        titulo: 'Estrutura de dados',
        rating: 4.543,
        numeroPaginas: 314,
        preco: 44.99,
        dataLancamento: new Date(2016, 5, 23),
        url: 'https://youtube.com'
    };

    addCurso(value: string) {
        if (value) {
            this.livros = [...this.livros, value]
            this.cdr.detectChanges();
        }
    }

    obterCursos() {
        if (this.livros.length === 0 || this.filtro.trim() === '' || this.filtro === undefined) {
            return this.livros;
        }
        return this.livros.filter((v: string) => {
            if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) > 0) {
                console.log(v);
                return true;

            }
            return false;
        }
        );
    }

    valorasync = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Valor assícrono')
        }, 2000)
    })

    ngOnInit() {

    }


    constructor(private cdr: ChangeDetectorRef) {

    }

}
