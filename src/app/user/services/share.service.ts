import { Injectable } from '@angular/core';
import { BeneficiaryData } from '../interfaces/data.interface';

@Injectable()
export class ShareService {
  private data: BeneficiaryData[] = [];

  setData(data: Object) {
    this.data = [];

    for (const item in data) {
      if (data.hasOwnProperty(item)) {
        const element = { ...data[item as keyof typeof data] };
        this.data.push(element as BeneficiaryData);
      }
    }
  }

  getData(): BeneficiaryData[] {
    return this.data;
  }
}
