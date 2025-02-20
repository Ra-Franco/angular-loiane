import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownService } from '../shared/services/dropdown.service';
import { EstadoBr } from '../shared/models/EstadoBr';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent implements OnInit {

  formulario: any = '';
  estados: any = '';


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private dropDownService: DropdownService) {

  }

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(),
    //   email: new FormControl(),
    // });
    this.dropDownService.getEstadosBr()
      .subscribe((dados: any) => { this.estados = dados; console.log(dados) })


    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.min(3), Validators.max(20)]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    })

  }

  onSubmit() {
    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .pipe(res => res)
        .subscribe(dados => {
          console.log(dados);
          this.resetar();
        },
          (error: any) => alert('Erro')
        )
    } else {
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((campo) => {
      const controle = formGroup.get(campo);
      controle?.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    })
  }

  resetar() {
    this.formulario.reset();
  }


  IsValidTouched(attribute: String) {
    return !this.formulario.get(attribute).valid && (this.formulario.get(attribute).touched || this.formulario.get(attribute).dirty)
  }

  verificaEmailInvalido() {
    let campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  applyErrorCss(attribute: String) {
    return {
      'has-error': this.IsValidTouched(attribute),
      'has-feedback': this.IsValidTouched(attribute)
    }
  }

  consultaCEP() {
    console.log(this.formulario.get('endereco.cep'))
    let cep = this.formulario.get('endereco.cep').value.replace(/\D/g, '');
    if (cep != "") {
      let validaCep = /^[0-9]{8}$/;
      if (validaCep.test(cep)) {
        this.resetaDadosFormulario();
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .subscribe(
            data => this.populaDadosForm(data)
          )
      }
    }
  }

  populaDadosForm(dados: any) {
    this.formulario.patchValue({
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

  resetaDadosFormulario() {
    this.formulario.patchValue({
      endereco: {
        cep: null,
        numero: null,
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null,
      }
    })
  }

}