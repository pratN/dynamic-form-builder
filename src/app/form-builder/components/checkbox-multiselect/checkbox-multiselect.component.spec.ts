import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxMultiselectComponent } from './checkbox-multiselect.component';

describe('CheckboxMultiselectComponent', () => {
  let component: CheckboxMultiselectComponent;
  let fixture: ComponentFixture<CheckboxMultiselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxMultiselectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
