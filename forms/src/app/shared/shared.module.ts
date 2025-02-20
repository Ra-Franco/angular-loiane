import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControErroComponent } from './campo-contro-erro/campo-contro-erro.component';



@NgModule({
  declarations: [FormDebugComponent, CampoControErroComponent],
  imports: [
    CommonModule
  ],
  exports: [FormDebugComponent, CampoControErroComponent],
})
export class SharedModule { }
