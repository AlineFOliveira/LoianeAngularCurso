import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrl: './input-property.component.scss'
})
export class InputPropertyComponent {
  @Input('nome') nomeCurso: string = '';
}
