import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { FormLayoutComponent } from './layout/form-layout/form-layout.component';
import { BeneficiariesFormComponent } from './components/beneficiaries-form/beneficiaries-form.component';

@NgModule({
  declarations: [UserComponent, FormLayoutComponent, BeneficiariesFormComponent],
  imports: [UserRoutingModule, NgxMaskDirective, NgxMaskPipe, CommonModule],
  providers: [provideNgxMask()],
})
export class UserModule {}
