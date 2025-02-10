import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-curso',
    templateUrl: './input-property.component.html',
    styleUrl: './input-property.component.css',
    inputs: ['nomeCurso:nome']
})
export class InputPropertyComponent {

    //@Input('nome') 
    nomeCurso: string = '';

}
