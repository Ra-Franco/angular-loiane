import {Component, setTestabilityGetter} from '@angular/core';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute } from '@angular/router';
import {IFormCandeactivate} from "../../guard/form-candeactivate";
import {Aluno} from "../aluno";


@Component({
    selector: 'app-aluno-formulario',
    templateUrl: './aluno-formulario.component.html',
    styleUrl: './aluno-formulario.component.scss'
})
export class AlunoFormularioComponent implements IFormCandeactivate {
    aluno: any;
    inscricao: Subscription = new Subscription();
    protected formMudou: boolean = false;

    constructor(private alunosService: AlunosService,
        private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
        this.inscricao = this.route.params.subscribe(
            (params: any) => {
                let id = params['id'];
                this.aluno = this.alunosService.getAluno(id);
            }
        );
    }

    ngOnDestroy() {
        this.inscricao.unsubscribe();
    }

  onInput(){
      this.formMudou = true;
    console.log('mudou')
  }

  podeMudarRota(){
      if (this.formMudou) {
        confirm("Tem certeza que deseja sair da página?")
      }
       return true;
  }

  podeDesativar(): any {
      this.podeMudarRota();
  }

  protected readonly oninput = oninput;
}
