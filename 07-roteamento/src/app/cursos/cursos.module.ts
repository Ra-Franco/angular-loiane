import { NgModule } from "@angular/core";
import { CursosComponent } from "./cursos.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CusoNaoEncontradoComponent } from "./cuso-nao-encontrado/cuso-nao-encontrado.component";
import { CursosService } from "./cursos.service";
import { CommonModule } from "@angular/common";
import { CursosRoutingModule } from "./cursos.routing.module";

@NgModule({
    imports: [CommonModule, CursosRoutingModule],
    declarations: [CursosComponent, CursoDetalheComponent, CusoNaoEncontradoComponent],
    providers: [CursosService]
})
export class CursosModule { }