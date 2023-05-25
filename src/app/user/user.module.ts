import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {UserRoutingModule} from "./user-routing.module";
import { FormLayoutComponent } from './layout/form-layout/form-layout.component';


@NgModule({
  declarations: [
    UserComponent,
    FormLayoutComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule
  ]
})
export class UserModule {
}
