import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../cursos-lista/cursos.service';
import { AlertModalService } from '../../shared/alert-modal.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../cursos-lista/curso';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrl: './cursos-form.component.scss'
})
export class CursosFormComponent {
  form!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: CursosService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap((id: string) => this.service.loadById(id))
      )
      .subscribe(curso => this.updateForm(curso as Curso))
    // concatMap -> Ordem da requisição importa
    // mergeMap -> Ordem não importa
    // exhaustMap -> casos de login 
    this.form = this.fb.group(
      {
        id: [null],
        nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]]
      }
    )
  }

  updateForm(curso: Curso) {
    this.form.patchValue({
      id: curso.id,
      nome: curso.nome
    })
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe(
        success => {
          this.modal.showAlertSuccess("Curso criado com sucesso!");
          this.location.back();
        },
        error => this.modal.showAlertDanger("Erro ao criar curso, tente novamente!"),
        () => {
          this.form.reset();
        }
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset()
  }
}
