import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-campo-contro-erro',
  templateUrl: './campo-contro-erro.component.html',
  styleUrl: './campo-contro-erro.component.css'
})
export class CampoControErroComponent {

  @Input() mostrarErro: boolean | undefined = false;
  @Input() msgErro: String = "";

}
