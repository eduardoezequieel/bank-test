import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';
import { BeneficiaryData } from '../../interfaces/data.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  data: BeneficiaryData[] = [];

  constructor(private shareService: ShareService) {}

  ngOnInit(): void {
    this.data = this.shareService.getData();
  }
}
