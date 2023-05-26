import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormLayoutComponent } from './form-layout.component';

describe('FormLayoutComponent', () => {
  let component: FormLayoutComponent;
  let fixture: ComponentFixture<FormLayoutComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLayoutComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
