import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
    selector: 'app-ciclo',
    templateUrl: './ciclo.component.html',
    styleUrl: './ciclo.component.css'
})
export class CicloComponent implements OnInit {

    constructor() {
        this.log("Constructor");
    }

    ngOnInit(): void {
        this.log("ngOnInit")
    }

    ngOnChanges() {
        this.log("onChanges")
    }

    private log(hook: string) {
        console.log(hook);
    }

}
