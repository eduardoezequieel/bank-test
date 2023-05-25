import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Beneficiary } from './interfaces/beneficiary.interface';
import Swal from 'sweetalert2';
import { CustomValidators } from './helpers/percentage.validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  parentForm = this.fb.group({}, { validators: CustomValidators.incompletePercentage });
  beneficiaries: Beneficiary[] = [];

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.addBeneficiary();
  }

  addBeneficiary(): void {
    if (this.beneficiaries.length === 5) {
      return;
    }

    const beneficiary = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      kinship: ['', Validators.required],
      percentage: ['', Validators.required],
    });

    const id = this.beneficiaries.length + 1;

    this.beneficiaries.push({ id, beneficiary });
    this.parentForm.addControl(`beneficiary${id}`, beneficiary);
  }

  deleteBeneficiary(id: number): void {
    if (this.beneficiaries.length === 1) {
      Swal.fire({
        title: 'Error',
        text: 'Debes de tener al menos un beneficiario.',
        icon: 'error',
      });
    } else {
      Swal.fire({
        title: 'Eliminar beneficiario',
        text: '¿Estás seguro? No podrás revertir esta acción',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
      }).then(({ isConfirmed }) => {
        if (isConfirmed) {
          this.beneficiaries = this.beneficiaries.filter((beneficiary) => beneficiary.id !== id);
          this.parentForm.removeControl(`beneficiary${id}`);
        }
      });
    }
  }

  onSubmit(): void {
    if (!this.parentForm.valid) {
      return;
    }

    console.log(this.parentForm.value);
  }
}
