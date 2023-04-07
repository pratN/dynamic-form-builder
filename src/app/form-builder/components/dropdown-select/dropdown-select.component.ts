import { Component, Input } from '@angular/core';

@Component({
  selector: 'ct-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss']
})
export class DropdownSelectComponent {
  @Input() config: any;
  newOption: string = ''

  addOption() {
    this.config.items.push(this.newOption)
    this.newOption = ''
  }

  deleteOption(index: number) {
    this.config.items.splice(index, 1)
  }
}
