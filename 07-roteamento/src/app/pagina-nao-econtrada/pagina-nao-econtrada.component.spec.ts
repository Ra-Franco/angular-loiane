import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNaoEcontradaComponent } from './pagina-nao-econtrada.component';

describe('PaginaNaoEcontradaComponent', () => {
  let component: PaginaNaoEcontradaComponent;
  let fixture: ComponentFixture<PaginaNaoEcontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaNaoEcontradaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaNaoEcontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
