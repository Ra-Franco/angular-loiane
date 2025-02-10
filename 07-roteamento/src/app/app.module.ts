import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { routing } from './app.routing';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos/cursos.service';
import { FormsModule } from '@angular/forms';
import {AuthService} from "./login/auth.service";
import {AuthGuard} from "./guard/auth.guard.service";
import {CursosGuard} from "./guard/cursos.guard";
import {AlunosGuard} from "./alunos/guard/alunos.guard";
import {PaginaNaoEcontradaComponent} from "./pagina-nao-econtrada/pagina-nao-econtrada.component";
// import { CursosModule } from './cursos/cursos.module';
// import { AlunosModule } from './alunos/alunos.module';
// import { CusoNaoEncontradoComponent } from './cursos/cuso-nao-encontrado/cuso-nao-encontrado.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        // CursosComponent,
        // CursoDetalheComponent,
        // CusoNaoEncontradoComponent,
        PaginaNaoEcontradaComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        //CursosModule,
        // AlunosModule,
        // routing,
        AppRoutingModule,
    ],
    providers: [AuthService, AuthGuard, CursosGuard, AlunosGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
