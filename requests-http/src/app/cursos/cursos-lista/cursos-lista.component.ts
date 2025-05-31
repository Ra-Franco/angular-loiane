import { Component, ViewChild } from '@angular/core';
import { CursosService } from './cursos.service';
import { Curso } from './curso';
import { catchError, EMPTY, Observable, Subject, switchMap, take } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../../shared/alert-modal/alert-modal.component';
import { AlertModalService } from '../../shared/alert-modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos2Service } from '../cursos2.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrl: './cursos-lista.component.scss',
  preserveWhitespaces: true,
})
export class CursosListaComponent {

  //cursos!: Curso[];
  //bsModalRef!: BsModalRef;

  @ViewChild('deleteModal') deleteModal: any;

  deleteModalRef!: BsModalRef;
  cursos$!: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  cursoSelecionado!: Curso;

  constructor(private service: Cursos2Service, private alertService: AlertModalService,
    private router: Router, private route: ActivatedRoute, private modalService: BsModalService
  ) {

  }

  ngOnInit() {
    //this.service.list().subscribe(dados => this.cursos = dados);
    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.service.list()
      .pipe(
        catchError((error: any) => {
          console.error(error);
          this.handleError();
          return EMPTY;
        })
      );

    // this.service.list().subscribe(
    //   dados => console.log(dados),
    //   error => console.error(error),
    //   () => console.log('Observable completo!')
    // )
  }

  onEdit(id: string | undefined) {
    if (!id) return;
    this.router.navigate(['editar', id], { relativeTo: this.route })
  }

  onDelete(curso: Curso) {
    this.cursoSelecionado = curso;
    //this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' })
    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover esse curso?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.service.remove(curso.id as string) : EMPTY)
      )
      .subscribe(
        success => { this.onRefresh() },
        error => { this.alertService.showAlertDanger('Erro ao remover curso. Tente novamente mais tarde.') },
      )
  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.')
  }

  // onConfirmDelete() {
  //   if (this.cursoSelecionado.id) {
  //     this.service.remove(this.cursoSelecionado.id)
  //       .subscribe(
  //  success => { this.onRefresh(), this.deleteModalRef.hide() },
  // error => { this.alertService.showAlertDanger('Erro ao remover curso. Tente novamente mais tarde.'), this.deleteModalRef.hide() },
  //     )
  //   }
  // }

  // onDeclineDelete() {
  //   this.deleteModalRef.hide();
  // }

}
