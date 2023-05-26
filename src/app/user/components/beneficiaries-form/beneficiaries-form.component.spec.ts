import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiariesFormComponent } from './beneficiaries-form.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('BeneficiariesFormComponent', () => {
  let component: BeneficiariesFormComponent;
  let fixture: ComponentFixture<BeneficiariesFormComponent>;
  let el: DebugElement;
  let fb = new FormBuilder();

  const mockBeneficiaryForm = fb.group({
    fullName: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern(/^[a-zA-ZáÁéÉíÍóÓúÚñÑ\s]+$/),
      ],
    ],
    kinship: ['', Validators.required],
    percentage: ['', Validators.required],
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeneficiariesFormComponent],
      imports: [ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(BeneficiariesFormComponent);
    el = fixture.debugElement;
  });

  const prepareInputs = () => {
    component = fixture.componentInstance;
    component.form = mockBeneficiaryForm;
    component.id = 1;
    component.invalidPercentage = false;
    fixture.detectChanges();
  };

  it('should create the component', () => {
    prepareInputs();
    expect(component).toBeTruthy();
  });

  it('should hide the delete button when id is 1', () => {
    prepareInputs();
    const deleteButton = fixture.nativeElement.querySelector('.delete-button');
    expect(deleteButton).toBeFalsy();
  });

  it('should show the delete button when id is different from 1', () => {
    component = fixture.componentInstance;
    component.form = mockBeneficiaryForm;
    component.id = 2;
    component.invalidPercentage = false;
    fixture.detectChanges();

    const deleteButton = fixture.nativeElement.querySelector('.delete-button');
    expect(deleteButton).toBeTruthy();
  });

  it('should show error messages when form is invalid', () => {
    prepareInputs();

    const [fullName, kinship, percentage] = el.queryAll(By.css('input, select'));

    fullName.triggerEventHandler('focus', null);
    fullName.triggerEventHandler('blur', null);

    kinship.triggerEventHandler('focus', null);
    kinship.triggerEventHandler('blur', null);

    percentage.triggerEventHandler('focus', null);
    percentage.triggerEventHandler('blur', null);
    fixture.detectChanges();

    expect(el.queryAll(By.css('.error-alert')).length).toBe(3);
  });

  it('should format percentage', () => {
    prepareInputs();

    const percentage = el.query(By.css('#percentage'));
    percentage.triggerEventHandler('input', { target: { value: '100' } });
    fixture.detectChanges();

    expect(component.percentage?.value).toBe('100%');
  });
});
