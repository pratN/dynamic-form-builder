import { Component, Input } from '@angular/core';

@Component({
  selector: 'ct-checkbox-multiselect',
  templateUrl: './checkbox-multiselect.component.html',
  styleUrls: ['./checkbox-multiselect.component.scss']
})
export class CheckboxMultiselectComponent {
  @Input() config: any;
  newCheckbox: string = ''

  addCheckbox() {
    this.config.items.push(this.newCheckbox)
    this.newCheckbox = ''
  }

  deleteCheckbox(index: number) {
    this.config.items.splice(index, 1)
  }
}
