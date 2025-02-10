import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CursosComponent } from "./cursos/cursos.component";
import { ModuleWithProviders } from "@angular/core";
import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
import { CusoNaoEncontradoComponent } from "./cursos/cuso-nao-encontrado/cuso-nao-encontrado.component";

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'nao-encontrado', component: CusoNaoEncontradoComponent }
]

export const routing = RouterModule.forRoot(APP_ROUTES);