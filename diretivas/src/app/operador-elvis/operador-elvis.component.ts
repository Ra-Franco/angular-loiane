import { Component } from '@angular/core';

@Component({
    selector: 'app-operador-elvis',
    templateUrl: './operador-elvis.component.html',
    styleUrl: './operador-elvis.component.css'
})
export class OperadorElvisComponent {

    tarefa = {
        desc: 'Descrição da tarefa',
        responsavel: {
            usuario: {
                nome: null
            }
        }
    }

}
