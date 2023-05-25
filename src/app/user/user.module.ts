import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { BeneficiariesFormComponent } from './components/beneficiaries-form/beneficiaries-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent, BeneficiariesFormComponent],
  imports: [
    UserRoutingModule,
    NgxMaskDirective,
    NgxMaskPipe,
    CommonModule,
    ReactiveFormsModule,
    
  ],
  providers: [provideNgxMask()],
})
export class UserModule {}
