import { Component, Input } from '@angular/core';

@Component({
  selector: 'ct-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {
  @Input() config: any;

}
