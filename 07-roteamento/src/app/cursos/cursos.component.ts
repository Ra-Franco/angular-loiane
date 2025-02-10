import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-cursos',
    templateUrl: './cursos.component.html',
    styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {

    cursos: any[];
    pagina: number = 1;
    inscricao: Subscription = new Subscription

    constructor(private cursosService: CursosService, private route: ActivatedRoute, private router: Router) {
        this.cursos = this.cursosService.getCursos();
    }

    ngOnInit() {
        this.cursos = this.cursosService.getCursos();

        this.inscricao = this.route.queryParams.subscribe(
            (queryParams: any) => {
                this.pagina = queryParams['pagina']
            }
        );
    }

    ngOnDestroy() {
        console.log("Destruido")
        this.inscricao.unsubscribe();
    }

    proximaPagina() {
        // this.pagina++;
        this.router.navigate(['/cursos'], { queryParams: { 'pagina': ++this.pagina } })
    }

}
