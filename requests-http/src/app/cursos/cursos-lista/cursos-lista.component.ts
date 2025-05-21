import { Component } from '@angular/core';
import { CursosService } from './cursos.service';
import { Curso } from './curso';
import { catchError, EMPTY, Observable, Subject } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../../shared/alert-modal/alert-modal.component';
import { AlertModalService } from '../../shared/alert-modal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrl: './cursos-lista.component.scss',
  preserveWhitespaces: true,
})
export class CursosListaComponent {

  //cursos!: Curso[];
  //bsModalRef!: BsModalRef;

  cursos$!: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(private service: CursosService, private alertService: AlertModalService,
    private router: Router, private route: ActivatedRoute
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

  onEdit(id: string) {
    this.router.navigate(['editar', id], { relativeTo: this.route })
  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.')
  }

}
