import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlunosComponent } from "./alunos.component";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormularioComponent } from "./aluno-formulario/aluno-formulario.component";
import {AlunosDeactivateGuard} from "./guard/alunos-deactivate.guard";
import {AlunoDetalheResolver} from "./guard/aluno-detalhe.resolver";

const ALUNOS_ROUTES: Routes = [
    {
        path: '', component: AlunosComponent, children: [
            { path: 'novo', component: AlunoFormularioComponent },
            { path: ':id', component: AlunoDetalheComponent, resolve: {aluno: AlunoDetalheResolver} },
            { path: ':id/editar', component: AlunoFormularioComponent, canDeactivate: [AlunosDeactivateGuard] },
        ]
    },
];
//Hard code vem primeiro 'alunos/novo' > 'alunos/:id'

@NgModule({
    imports: [RouterModule.forChild(ALUNOS_ROUTES)],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }
