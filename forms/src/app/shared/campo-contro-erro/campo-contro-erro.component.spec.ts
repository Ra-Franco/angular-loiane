import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoControErroComponent } from './campo-contro-erro.component';

describe('CampoControErroComponent', () => {
  let component: CampoControErroComponent;
  let fixture: ComponentFixture<CampoControErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampoControErroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampoControErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
