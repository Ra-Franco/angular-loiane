import { Component } from '@angular/core';
import { AlunosService } from './alunos.service';

@Component({
    selector: 'app-alunos',
    templateUrl: './alunos.component.html',
    styleUrl: './alunos.component.scss'
})
export class AlunosComponent {

    alunos: any = []

    constructor(private alunosService: AlunosService) {

    }

    ngOnInit() {
        this.alunos = this.alunosService.getAlunos();
    }

}
