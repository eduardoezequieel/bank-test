import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-beneficiaries-form',
  templateUrl: './beneficiaries-form.component.html',
  styleUrls: ['./beneficiaries-form.component.scss'],
})
export class BeneficiariesFormComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  @Input() form!: FormGroup;
  @Input() id!: number;
  @Input() invalidPercentage: boolean = false;
  @Output() idToBeDeleted = new EventEmitter<number>();
  @Output() formSubmitted = new EventEmitter<boolean>();

  get fullName() {
    return this.form.get('fullName');
  }

  get kinship() {
    return this.form.get('kinship');
  }

  get percentage() {
    return this.form.get('percentage');
  }

  ngOnInit(): void {
    this.subscription = this.percentage!.valueChanges.subscribe((value: string) => {
      const newValue = value.replace(/[^0-9]/g, '');

      if (newValue != '') {
        this.percentage?.setValue(`${newValue}%`, { emitEvent: false });
      } else {
        this.percentage?.setValue(newValue, { emitEvent: false });
      }
    });
  }
  onDelete(): void {
    this.idToBeDeleted.emit(this.id);
  }

  onSubmit(): void {
    this.formSubmitted.emit(true);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
