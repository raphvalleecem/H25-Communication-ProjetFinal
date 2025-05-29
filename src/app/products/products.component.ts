import {Component, OnInit} from '@angular/core';
import {DbSingletonService, Product} from "../dbSingleton.service";
import {NgForOf, NgIf} from "@angular/common";
import {ProductItemComponent} from "./product-item/product-item.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf,
    ProductItemComponent,
    NgIf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private dbSingleton: DbSingletonService) {
  }

  ngOnInit() {
    this.products = this.dbSingleton.products;
  }
}
