import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getProductList();
  }
  productList!: any;
  async getProductList() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const resJson = await res.json();
      if (res.status < 400) {
        this.productList = resJson;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
