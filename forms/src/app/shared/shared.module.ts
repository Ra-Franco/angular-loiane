import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControErroComponent } from './campo-contro-erro/campo-contro-erro.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';



@NgModule({
  declarations: [FormDebugComponent, CampoControErroComponent, ErrorMsgComponent],
  imports: [
    CommonModule
  ],
  exports: [FormDebugComponent, CampoControErroComponent, ErrorMsgComponent],
})
export class SharedModule { }
