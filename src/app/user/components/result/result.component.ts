import { Component, Input } from '@angular/core';
import { BeneficiaryData } from '../../interfaces/data.interface';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() beneficiary!: BeneficiaryData;
}
