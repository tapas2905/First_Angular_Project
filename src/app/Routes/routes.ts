import { Routes } from '@angular/router';
import { AboutComponent } from '../component/about/about.component';
import { FormComponent } from '../component/form/form.component';
import { HomeComponent } from '../component/home/home.component';
import { ProductDetailsComponent } from '../component/product/product-details/product-details.component';
import { ProductListComponent } from '../component/product/product-list/product-list.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'form', component: FormComponent },
  // { path: 'form', component: ProductDetailsComponent },
  {
    path: 'products',
    loadChildren: () =>
      import('../component/product/product.module').then(
        (x) => x.ProductModule
      ),
  },
];
