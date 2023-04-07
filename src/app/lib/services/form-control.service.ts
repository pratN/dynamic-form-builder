import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class FormControlService {
  toFormGroup(elements: any[] ) {
    const group: any = {};

    elements.forEach(element => {
      group[element.config.key] = element.required ? new FormControl(element.value || '', Validators.required)
                                              : new FormControl(element.value || '');
    });
    return new FormGroup(group);
  }
}

