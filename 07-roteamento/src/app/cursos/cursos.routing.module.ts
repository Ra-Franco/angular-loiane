import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { CursosComponent } from "./cursos.component";
import { ModuleWithProviders } from "@angular/core";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CusoNaoEncontradoComponent } from "./cuso-nao-encontrado/cuso-nao-encontrado.component";

const CURSOS_ROUTES: Routes = [
    { path: '', component: CursosComponent },
    { path: 'nao-encontrado', component: CusoNaoEncontradoComponent },
    { path: ':id', component: CursoDetalheComponent },
]

@NgModule({
    imports: [RouterModule.forChild(CURSOS_ROUTES)],
    exports: [RouterModule]
})
export class CursosRoutingModule {

}