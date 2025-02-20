import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent implements OnInit {

  formulario: any = '';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {

  }

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(),
    //   email: new FormControl(),
    // });

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
    console.log(this.formulario)
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .pipe(res => res)
      .subscribe(dados => {
        console.log(dados);
        this.resetar();
      },
        (error: any) => alert('Erro')
      )
  }

  resetar() {
    this.formulario.reset();
  }


  IsValidTouched(attribute: String) {
    return !this.formulario.get(attribute).valid && this.formulario.get(attribute).touched
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


}
