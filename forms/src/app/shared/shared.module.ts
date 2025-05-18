import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControErroComponent } from './campo-contro-erro/campo-contro-erro.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormDebugComponent, CampoControErroComponent, ErrorMsgComponent, InputFieldComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [FormDebugComponent, CampoControErroComponent, ErrorMsgComponent, InputFieldComponent],
})
export class SharedModule { }
