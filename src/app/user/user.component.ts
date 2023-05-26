import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Beneficiary } from './interfaces/beneficiary.interface';
import Swal from 'sweetalert2';
import { CustomValidators } from './helpers/percentage.validator';
import { Router } from '@angular/router';
import { ShareService } from './services/share.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  parentForm = this.fb.group({}, { validators: CustomValidators.invalidPercentage });
  beneficiaries: Beneficiary[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private shareService: ShareService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addBeneficiary();
  }

  addBeneficiary(): void {
    if (this.beneficiaries.length === 5) {
      return;
    }

    const beneficiary = this.fb.group({
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

    const id = this.beneficiaries.length + 1;

    this.beneficiaries.push({ id, beneficiary });
    this.parentForm.addControl(`beneficiary${id}`, beneficiary);
  }

  deleteBeneficiary(id: number): void {
    if (id === 1) {
      return;
    }

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

  onSubmit(): void {
    if (!this.parentForm.valid) {
      return;
    }

    this.shareService.setData(this.parentForm.value);

    this.router.navigate(['/user/results']);
  }
}
