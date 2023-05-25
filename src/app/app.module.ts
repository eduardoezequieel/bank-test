import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './theme/navbar/navbar.component';
import { FormLayoutComponent } from './theme/form-layout/form-layout.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NavbarComponent, FormLayoutComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
