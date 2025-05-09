import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {DbSingletonService, Employee, Product} from "../dbSingleton.service";
import {DatePipe, NgForOf} from "@angular/common";
import {ProductItemComponent} from "../products/product-item/product-item.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    ProductItemComponent,
    DatePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Product[] = [];
  employees: Employee[] = [];

  constructor(private dbSingleton: DbSingletonService) {
  }

  ngOnInit() {
    this.products = this.dbSingleton.products.slice(0, 3);
    this.employees = this.dbSingleton.employees;
  }

}
