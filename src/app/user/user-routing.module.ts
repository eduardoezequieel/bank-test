import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { ResultsComponent } from './pages/results/results.component';
import { noBeneficiariesGuard } from './guards/no-beneficiaries.guard';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'results',
    component: ResultsComponent,
    canActivate: [noBeneficiariesGuard]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
