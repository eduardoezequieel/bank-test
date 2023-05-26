import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareService } from './services/share.service';
import { Router } from '@angular/router';
import { BeneficiariesFormComponent } from './components/beneficiaries-form/beneficiaries-form.component';
import { By } from '@angular/platform-browser';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let shareService: ShareService;
  let router: Router;

  beforeEach(() => {
    const mockService = jasmine.createSpyObj('ShareService', ['setData']);
    const mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      declarations: [UserComponent, BeneficiariesFormComponent],
      imports: [ReactiveFormsModule],
      providers: [ShareService, Router],
    });
    shareService = TestBed.inject(ShareService);
    router = TestBed.inject(Router);

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have at least 1 beneficiary', () => {
    expect(component.beneficiaries.length).toBeGreaterThanOrEqual(1);
  });

  it('should find a disabled button', () => {
    const button = fixture.nativeElement.querySelector('.continue-button');
    expect(button.disabled).toBeTruthy();
  });

  it('should create no more than 5 beneficiaries', () => {
    const button = fixture.nativeElement.querySelector('.add-button');

    button.click();
    button.click();
    button.click();
    button.click();
    button.click();
    button.click();

    fixture.detectChanges();

    expect(component.beneficiaries.length).toBeLessThanOrEqual(5);
  });

  it('should delete a beneficiary', fakeAsync(() => {
    const swalPromise = Promise.resolve({ isConfirmed: true }) as Promise<
      SweetAlertResult<unknown>
    >;
    spyOn(Swal, 'fire').and.returnValue(swalPromise);

    const button = fixture.nativeElement.querySelector('.add-button');

    button.click();
    button.click();

    expect(component.beneficiaries.length).toBe(3);

    component.deleteBeneficiary(2);
    tick();

    expect(component.beneficiaries.length).toBe(2);
  }));

  it('should send the form correctly', () => {
    spyOn(router, 'navigate');
    spyOn(shareService, 'setData');

    const [fullName, kinship] = fixture.debugElement.queryAll(
      By.css('#full-name, #kinship-select')
    );

    fullName.triggerEventHandler('input', { target: { value: 'Juan Perez de la Cruz' } });
    kinship.triggerEventHandler('change', { target: { value: 'Hijo' } });
    component.parentForm
      .get('beneficiary1')!
      .get('percentage')!
      .setValue('100' as never);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.continue-button');

    expect(button.disabled).toBeFalsy();

    button.click();

    fixture.detectChanges();

    expect(component.parentForm.valid).toBeTruthy();
    expect(shareService.setData).toHaveBeenCalledWith(component.parentForm.value);
    expect(router.navigate).toHaveBeenCalledWith(['/user/results']);
  });
});
