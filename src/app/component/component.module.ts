import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ProductModule } from './product/product.module';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { ReactiveValidationModule } from 'angular-reactive-validation';
@NgModule({
  declarations: [NavComponent, HomeComponent, AboutComponent, FormComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    ProductModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
  exports: [NavComponent, HomeComponent, AboutComponent, FormComponent],
})
export class ComponentModule {}
