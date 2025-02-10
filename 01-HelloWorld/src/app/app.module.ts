import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MeuPrimeiro } from './meu-primeiro-component/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
    declarations: [
        AppComponent,
        MeuPrimeiro,
        MeuPrimeiro2Component,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CursosModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
