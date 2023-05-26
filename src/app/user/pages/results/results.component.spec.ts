import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsComponent } from './results.component';
import { ShareService } from '../../services/share.service';
import { BeneficiaryData } from '../../interfaces/data.interface';
import { ResultComponent } from '../../components/result/result.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let shareService: ShareService;
  let mockShareService: jasmine.SpyObj<ShareService>;

  beforeEach(() => {
    const spyShareService = jasmine.createSpyObj('ShareService', ['getData']);

    TestBed.configureTestingModule({
      declarations: [ResultsComponent, ResultComponent],
      providers: [{ provide: ShareService, useValue: spyShareService }],
    });
    shareService = TestBed.inject(ShareService);
    mockShareService = TestBed.inject(ShareService) as jasmine.SpyObj<ShareService>;

    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should receive data from service', () => {
    const mockBeneficiaries: BeneficiaryData[] = [
      {
        fullName: 'John Doe',
        kinship: 'Son',
        percentage: '50%',
      },
      {
        fullName: 'Mary Doe',
        kinship: 'Daughter',
        percentage: '50%',
      },
    ];

    mockShareService.getData.and.returnValue(mockBeneficiaries);
    fixture.detectChanges();

    expect(mockShareService.getData).toHaveBeenCalled();
    expect(component.data).toEqual(mockBeneficiaries);
  });
});
