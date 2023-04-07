import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControlService } from 'src/app/lib/services/form-control.service';

@Component({
  selector: 'ct-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.scss'],
  providers: [FormControlService]
})
export class FormViewerComponent implements OnInit {

  formConfig: any = null
  payload: any = {};
  form!: FormGroup;

  constructor(private formControl: FormControlService, private router: Router) {}


  ngOnInit(): void {
    //this.someApi.getFormConfig(id)
    setTimeout(() => {
      let rawConfig = localStorage.getItem('dynamic-form-config') ?? 'not-found'
      this.formConfig = JSON.parse(rawConfig)
      this.form = this.formControl.toFormGroup(this.formConfig.elements)

     }, 500)
  }

  submitForm() {
    this.payload = this.form.getRawValue()
        //this.someApi.submitForm(id, payload)

    console.log('PAYLOAD', this.payload)
  }

  returnToEdit() {
    this.router.navigateByUrl('');

  }

}
