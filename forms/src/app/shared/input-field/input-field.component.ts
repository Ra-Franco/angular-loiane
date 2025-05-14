import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {

  @Input() classCss: any;
  @Input() id: string = "";
  @Input() label: string = "";
  @Input() type = 'text';
  @Input() control: AbstractControl | null = null;

}
