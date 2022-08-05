import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [ProductDetailsComponent, ProductListComponent],
})
export class ProductModule {}
