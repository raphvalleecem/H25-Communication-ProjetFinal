import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {DbSingletonService, Product} from "../dbSingleton.service";
import {NgForOf} from "@angular/common";
import {ProductItemComponent} from "../products/product-item/product-item.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    ProductItemComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Product[] = [];

  constructor(private dbSingleton: DbSingletonService) {
  }

  ngOnInit() {
    this.products = this.dbSingleton.products.slice(0, 3);
  }

}
