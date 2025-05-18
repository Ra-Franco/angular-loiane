import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: ''
})
export abstract class BaseFormComponent {
  formulario: FormGroup | any;

  abstract submit(): any;

  onSubmit() {
    if (this.formulario.valid) {
      this.submit();
    } else {
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup?.controls).forEach((campo) => {
      const controle = formGroup?.get(campo);
      controle?.markAsDirty();
      controle?.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificaValidacoesForm(controle as FormGroup);
      }
    })
  }

  resetar() {
    this.formulario.reset();
  }

  IsValidTouched(attribute: string): boolean {
    const control = this.formulario?.get(attribute);
    if (!control) {
      return false;
    }
    return control.hasError('required') && (control.touched || control.dirty);
  }

  verificaEmailInvalido() {
    let campoEmail = this.formulario?.get('email');
    if (campoEmail?.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  applyErrorCss(attribute: string) {
    return {
      'has-error': this.IsValidTouched(attribute),
      'has-feedback': this.IsValidTouched(attribute)
    }
  }

}
