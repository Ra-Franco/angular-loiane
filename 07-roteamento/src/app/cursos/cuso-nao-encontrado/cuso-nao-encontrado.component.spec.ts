import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusoNaoEncontradoComponent } from './cuso-nao-encontrado.component';

describe('CusoNaoEncontradoComponent', () => {
  let component: CusoNaoEncontradoComponent;
  let fixture: ComponentFixture<CusoNaoEncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusoNaoEncontradoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusoNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
