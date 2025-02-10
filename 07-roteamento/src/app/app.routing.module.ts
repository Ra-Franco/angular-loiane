import { NgModule } from "@angular/core";
import {mapToCanActivate, RouterModule, Routes} from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CursosModule } from "./cursos/cursos.module";
import {AuthGuard} from "./guard/auth.guard.service";
import {CursosGuard} from "./guard/cursos.guard";
import {AlunosGuard} from "./alunos/guard/alunos.guard";
import {PaginaNaoEcontradaComponent} from "./pagina-nao-econtrada/pagina-nao-econtrada.component";


const APP_ROUTES: Routes = [
    { path: 'cursos',
      canActivate: [AuthGuard],
      canActivateChild: [CursosGuard],
      canMatch: [AuthGuard],
      loadChildren: () => import('../app/cursos/cursos.module').then(m => m.CursosModule) },
    { path: 'alunos',
      canActivate: [AuthGuard],
      canActivateChild: [AlunosGuard],
      canMatch: [AuthGuard],
      loadChildren: () => import('../app/alunos/alunos.module').then(m => m.AlunosModule) },
    { path: 'login',
      component: LoginComponent },
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '',
      canActivate: [AuthGuard],
      canMatch: [AuthGuard],
      component: HomeComponent },

    {path: '**', component: PaginaNaoEcontradaComponent}
    // { path: 'cursos', component: CursosComponent },
    // { path: 'curso/:id', component: CursoDetalheComponent },
    // { path: 'nao-encontrado', component: CusoNaoEncontradoComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES,
      {
        useHash: true
      })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
