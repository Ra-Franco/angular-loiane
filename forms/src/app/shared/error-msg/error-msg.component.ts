import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FormValidations } from '../form-validation';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrl: './error-msg.component.css'
})
export class ErrorMsgComponent {

  //@Input() mostrarErro: boolean | undefined = false;
  //@Input() msgErro: String = "";

  @Input() control!: AbstractControl | null;
  @Input() label: string = "";

  constructor() { }

  get errorMessage() {
    for (const propertyName in this.control?.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return FormValidations.getErrorMsg(this.label, propertyName, this.control.errors[propertyName])
      }
    }
    return null;
  }

}
