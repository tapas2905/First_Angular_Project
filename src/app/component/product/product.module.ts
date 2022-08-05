import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProductsRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  imports: [CommonModule, AppRoutingModule, ProductsRoutingModule],
  exports: [ProductDetailsComponent, ProductListComponent],
})
export class ProductModule {}
