import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DropdownService } from '../shared/services/dropdown.service';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { distinctUntilChanged, empty, map, Observable, switchMap, tap } from 'rxjs';
import { EstadoBr } from '../shared/models/EstadoBr';
import { Cargo } from '../shared/models/Cargo';
import { Tecnologia } from '../shared/models/Tecnologia';
import { Newsletter } from '../shared/models/Newsletter';
import { FormValidations } from '../shared/form-validation';
import { VerificaEmailService } from './services/verifica-email.service';
import { BaseFormComponent } from '../shared/base-form/base-form.component';
import { Cidade } from '../shared/models/cidade';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent extends BaseFormComponent implements OnInit {
  estados!: EstadoBr[];
  cidades!: Cidade[];
  //estados!: Observable<EstadoBr[]>;
  cargos!: Observable<Cargo[]>;
  tecnologias!: Observable<Tecnologia[]>;
  newsletterOp !: Observable<Newsletter[]>;

  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private cepService: ConsultaCepService,
    private dropDownService: DropdownService,
    private verificaEmailService: VerificaEmailService
  ) {
    super();
  }

  ngOnInit() {

    // this.formulario = new FormGroup({
    //   nome: new FormControl(),
    //   email: new FormControl(),
    // });
    // this.dropDownService.getEstadosBr()
    //   .subscribe((dados: any) => { this.estados = dados; console.log(dados) })
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
      confirmarEmail: [null, [FormValidations.equalsTo('email')]],

      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      }),

      cargo: [null, Validators.required],
      tecnologias: [[], Validators.required],
      newsletter: ['S', Validators.required],
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFrameworks()
    })

    this.formulario.get('endereco.cep')?.statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(value => console.log(value)),
        switchMap(status => status === 'VALID' ? this.cepService.consultaCEP(this.formulario.get('endereco.cep')?.value)
          : empty()
        )
      )
      .subscribe((dados: any) => dados ? this.populaDadosForm(dados) : {});

    this.formulario.get('endereco.estado').valueChanges
      .pipe(
        map(estado => this.estados.filter(e => e.sigla === estado)),
        map((estados: EstadoBr[]) => estados && estados.length > 0 ? estados[0].id : empty),
        switchMap((estadoId: number) => this.dropDownService.getCidades(estadoId)),
      )
      .subscribe((cidades: Cidade[]) => this.cidades = cidades);
    //this.dropDownService.getCidades(8).subscribe(console.log);
    //this.verificaEmailService.verificarEmail('').subscribe();

    //this.estados = this.dropDownService.getEstadosBr();
    this.dropDownService.getEstadosBr().subscribe(dados => this.estados = dados);;
    this.cargos = this.dropDownService.getCargos();
    this.tecnologias = this.dropDownService.getTecnologias();
    this.newsletterOp = this.dropDownService.getNewsletter();
  }

  buildFrameworks() {
    return this.formBuilder.array(
      this.frameworks.map(() => new FormControl(false)),
      FormValidations.requiredMinCheckbox(1)
    );
  }

  frameworksFormControl() {
    return (this.formulario.get('frameworks') as FormArray).controls
  }

  submit() {
    console.log(this.formulario);

    let valueSubmit = Object.assign({}, this.formulario.value);
    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((v: string, i: number) => v ? this.frameworks[i] : null)
        .filter((v: string) => v !== null)
    });
    console.log(valueSubmit.frameworks)
    this.http.post('https://httpbin.org/post', JSON.stringify(valueSubmit))
      .pipe(res => res)
      .subscribe(dados => {
        console.log(dados);
        this.resetar();
      },
        (error: any) => alert('Erro')
      )
  }

  consultaCEP() {
    let cep = this.formulario?.get('endereco.cep')?.value;
    if (cep != null && cep !== '') {
      this.resetaDadosFormulario();
      this.cepService.consultaCEP(cep)
        ?.subscribe(
          data => this.populaDadosForm(data)
        );
    }
  }

  populaDadosForm(dados: any) {
    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep.replace("-", ""),
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }

  resetaDadosFormulario() {
    this.formulario.patchValue({
      endereco: {
        cep: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null,
      }
    })
  }

  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.formulario?.get('cargo')?.setValue(cargo);
  }

  compararCargos(obj1: Cargo, obj2: Cargo) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }

  setarTecnologias() {
    this.formulario?.get('tecnologias')?.setValue(['Java', 'PHP'])
  }

  validarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificarEmail(formControl.value)
      .pipe(
        map(emailExiste => emailExiste ? { emailInvalido: true } : null)
      );
  }

}