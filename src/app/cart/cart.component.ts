import {Component, OnInit} from '@angular/core';
import {DbSingletonService, Product} from "../dbSingleton.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  products: Product[] = [];

  constructor(private dbSingleton: DbSingletonService) {
  }

  ngOnInit(){
    this.products = this.dbSingleton.products;
  }

  get subtotal(): number {
    return this.products.reduce((sum, item) => sum + item.price, 0);
  }

  get tax(): number {
    return this.subtotal * 0.2; // 15% tax
  }

  get total(): number {
    return this.subtotal + this.tax;
  }

  payNow() {
    alert('Lorem!');
  }
}
