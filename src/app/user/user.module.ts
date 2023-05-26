import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { BeneficiariesFormComponent } from './components/beneficiaries-form/beneficiaries-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareService } from './services/share.service';
import { ResultsComponent } from './pages/results/results.component';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [UserComponent, ResultsComponent, ResultComponent, BeneficiariesFormComponent],
  imports: [UserRoutingModule, CommonModule, ReactiveFormsModule],
  providers: [ShareService],
})
export class UserModule {}
