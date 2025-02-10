import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
    selector: 'app-curso-detalhe',
    templateUrl: './curso-detalhe.component.html',
    styleUrl: './curso-detalhe.component.scss'
})
export class CursoDetalheComponent implements OnInit {

    id: string = '';
    inscricao: Subscription = new Subscription();
    curso: any;

    constructor(private route: ActivatedRoute, private cursosService: CursosService, private router: Router) {
        // this.id = this.route.snapshot.params['id'];
    }

    ngOnInit() {
        this.inscricao = this.route.params.subscribe(
            (params: any) => {
                this.id = params['id'];

                this.curso = this.cursosService.getCurso(params['id']);

                if (this.curso == null) {
                    this.router.navigate(['cursos/nao-encontrado']);
                }
            }
        );
    }
    ngOnDestroy() {
        this.inscricao.unsubscribe();
    }
}
