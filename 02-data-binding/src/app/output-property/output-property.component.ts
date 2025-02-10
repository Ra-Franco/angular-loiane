import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'contador',
    templateUrl: './output-property.component.html',
    styleUrl: './output-property.component.css'
})
export class OutputPropertyComponent {

    @Input() valor: number = 0;

    @Output() mudouValor = new EventEmitter();

    @ViewChild('campoInput') campoValorInput: any;

    incrementar() {
        console.log(this.valor);
        this.campoValorInput.nativeElement.value++;
        this.mudouValor.emit({ novoValor: this.valor });

    }

    decrementar() {
        this.campoValorInput.nativeElement.value--;
        this.mudouValor.emit({ novoValor: this.valor })
    }

}
