import { Component } from '@angular/core';

@Component({
    selector: 'app-diretiva-ngswitch',
    templateUrl: './diretiva-ngswitch.component.html',
    styleUrl: './diretiva-ngswitch.component.css'
})
export class DiretivaNgswitchComponent {

    aba = 'home';

    alteraAba(novaAba: string) {
        this.aba = novaAba;
        console.log(this.aba)
    }

}
