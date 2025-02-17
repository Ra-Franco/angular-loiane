import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  usuario: any = {
    nome: null,
    email: null
  }

  constructor(private http: HttpClient) {

  }

  onSubmit(form: NgForm) {
    console.log(form);

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .pipe(res => res)
      .subscribe(dados => console.log(dados))

  }

  IsValidTouched(attribute: any) {
    return !attribute.valid && attribute.touched;
  }

  applyErrorCss(attribute: any) {
    return {
      'has-error': this.IsValidTouched(attribute),
      'has-feedback': this.IsValidTouched(attribute)
    }
  }

  consultaCEP(cep: any | null, form: any) {
    cep = cep.value.replace(/\D/g, '');
    if (cep != "") {
      let validaCep = /^[0-9]{8}$/;
      if (validaCep.test(cep)) {
        this.resetaDadosFormulario(form);
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .subscribe(
            data => this.populaDadosForm(data, form)
          )
      }
    }
  }

  populaDadosForm(dados: any, formulario: NgForm) {
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,
    //   endereco: {
    //     rua: dados.logradouro,
    //     cep: dados.cep,
    //     numero: formulario.value.endereco.numero,
    //     complemento: dados.complemento,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.estado
    //   }
    // });
    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.estado
      }
    })
  }

  resetaDadosFormulario(formulario: any) {
    formulario.form.patchValue({
      endereco: {
        rua: null,
        cep: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    })
  }

}
