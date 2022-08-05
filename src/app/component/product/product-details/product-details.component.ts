import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _toast: ToastrService
  ) {}
  id!: any;
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.getProductDetails();
  }
  productDetails!: any;
  loading: boolean = false;
  async getProductDetails() {
    try {
      this.loading = true;
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${this.id}`
      );
      const resJson = await res.json();
      if (res.status < 400) {
        this.productDetails = resJson;
        this.loading = false;
        this._toast.success('toast working!');
      }
    } catch (error) {
      console.log(error);
      this.loading = false;
    }
  }
}
