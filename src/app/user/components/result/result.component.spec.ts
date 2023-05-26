import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  const mockBeneficiary = {
    fullName: 'John Doe',
    kinship: 'Father',
    percentage: '100%',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultComponent],
    });
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    component.beneficiary = mockBeneficiary;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render beneficiary data', () => {
    const [kinship, fullName, percentage] = fixture.nativeElement.querySelectorAll(
      'h3, p'
    ) as Array<HTMLElement>;

    expect(kinship.textContent).toContain(mockBeneficiary.kinship);
    expect(fullName.textContent).toContain(mockBeneficiary.fullName);
    expect(percentage.textContent).toContain(mockBeneficiary.percentage);
  });
});
