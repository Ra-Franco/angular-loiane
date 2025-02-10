import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Aluno} from "../aluno";

@Component({
    selector: 'app-aluno-detalhe',
    templateUrl: './aluno-detalhe.component.html',
    styleUrl: './aluno-detalhe.component.scss'
})
export class AlunoDetalheComponent {
    aluno: any;
    inscricao: Subscription = new Subscription();

    constructor(private alunosService: AlunosService,
        private route: ActivatedRoute,
        private router: Router
    ) {

    }

    ngOnInit() {
    //     this.inscricao = this.route.params.subscribe(
    //         (params: any) => {
    //             let id = params['id'];
    //             this.aluno = this.alunosService.getAluno(id);
    //         }
    //     );
      console.log("ngOnInit: AlunoDetalhe")
    this.inscricao = this.route.data.subscribe(
    (data) => {
      console.log("Dentro da função ngOnInit")
      this.aluno = data['aluno'];
    });
    }

    ngOnDestroy() {
        this.inscricao.unsubscribe();
    }

    editarContato() {
        this.router.navigate(['alunos', this.aluno.id, 'editar'])
    }
}
