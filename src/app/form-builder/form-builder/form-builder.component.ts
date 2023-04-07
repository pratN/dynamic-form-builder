import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'ct-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit{
  constructor(private router: Router, private _snackBar: MatSnackBar) { }
  
  availableElements = [
    {
      key: 'text-input',
      icon: 'text_fields',
      label: 'Text Input',
    },
    {
      key: 'multi-checkbox',
      icon: 'ballot',
      label: 'Checkbox List',
    },
    {
      key: 'dropdown',
      icon: 'view_list',
      label: 'Dropdown List',
    },
  ];

  formConfig: any = {
    title: '',
    elements: [],
  };

  ngOnInit(): void {
        //this.someApi.getFormConfig(id)   //check if there is a stored config
    let rawConfig = localStorage.getItem('dynamic-form-config') ?? 'not-found'
    this.formConfig = JSON.parse(rawConfig)
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  addFormElement(elementType: string) {
    let newElement = {
      type: elementType,
      config: {},
    };
    switch (elementType) {
      case 'text-input':
        newElement.config = {
          key: '',
          label: '',
          required: '',
        };
        break;
      case 'multi-checkbox':
        newElement.config = {
          key: '',
          label: '',
          items: [],
          required: '',
        };
        break;
      case 'dropdown':
        newElement.config = {
          key: '',
          label: '',
          items: [],
          required: '',
        };
    }
    this.formConfig.elements.push(newElement);
  }

  deleteFormElement(index: number) {
    this.formConfig.elements.splice(index, 1);
  }

  save() {
    // this.someApi.saveConfig(this.formConfig)
    setTimeout(() => {
      localStorage.setItem(
        'dynamic-form-config',
        JSON.stringify(this.formConfig)
      );
      this._snackBar.open('Saved Changes', 'Dismiss', {duration: 1500});
      this.router.navigateByUrl('/view');
    }, 500);
  }
}
