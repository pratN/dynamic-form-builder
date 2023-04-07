import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormViewerComponent } from './form-viewer/form-viewer.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import { DropdownSelectComponent } from './components/dropdown-select/dropdown-select.component';
import { CheckboxMultiselectComponent } from './components/checkbox-multiselect/checkbox-multiselect.component';

const routes: Routes = [
  {
  path: '',
  component: FormBuilderComponent
},
  {
  path: 'view',
  component: FormViewerComponent
},
];

@NgModule({
  declarations: [
    FormBuilderComponent,
    FormViewerComponent,
    TextInputComponent,
    DropdownSelectComponent,
    CheckboxMultiselectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FormBuilderModule { }
