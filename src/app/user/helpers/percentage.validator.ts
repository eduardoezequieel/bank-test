import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static incompletePercentage(control: AbstractControl): ValidationErrors | null {
    const formGroup = control as FormGroup;
    let totalPercentage = 0;

    for (const control in formGroup.controls) {
      const percentage = parseInt(formGroup.controls[control].get('percentage')?.value);

      if (!Number.isInteger(percentage)) {
        return null;
      }

      totalPercentage = totalPercentage + percentage;
    }

    if (totalPercentage !== 100) {
      return { incompletePercentage: true };
    }

    return null;
  }
}
