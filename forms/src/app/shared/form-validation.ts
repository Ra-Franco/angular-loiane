import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export class FormValidations {
    static requiredMinCheckbox(min = 1) {
        const validator: ValidatorFn = (formArray: AbstractControl) => {
            /*const values = formArray.controls;
            let totalChecked = 0;
            for (let i = 0; i < values.length; i++) {
              if (values[i].value) {
                totalChecked += 1;
              }
            }*/
            if (formArray instanceof FormArray) {
                const totalChecked = formArray.controls
                    .map(v => v.value)
                    .reduce((total, current) => current ? total + current : total, 0)
                return totalChecked >= min ? null : { required: true }
            }
            throw new Error('formArray is not an instance of FormArray');
        }
        return validator;
    }

    static cepValidator(control: FormControl) {
        const cep = control.value;
        if (cep && cep !== '') {
            const validaCep = /^[0-9]{8}$/;
            return validaCep.test(cep) ? null : { cepInvalido: true };
        }
        return null;
    }

    static equalsTo(otherField: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (!control.parent) return null;
            const field = control.parent.get(otherField);

            if (!field) return null;
            if (field.value === control.value) {
                return null;
            }

            return { equalsTo: otherField };
        };
    }

    static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
        const config: any = {
            'required': `O ${fieldName} é obrigatório.`,
            'minlength': `O ${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
            'maxlength': `O ${fieldName} pode ter no máximo ${validatorValue.requiredLength} caracteres.`,
            'cepInvalido': 'CEP Inválido.',
        };

        return config[validatorName];
    }
}


