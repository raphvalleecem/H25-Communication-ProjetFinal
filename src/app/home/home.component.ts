import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {DbSingletonService, Employee, Product} from "../dbSingleton.service";
import {CommonModule, DatePipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {
  CarouselCaptionComponent,
  CarouselComponent,
  CarouselControlComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
} from "@coreui/angular";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    DatePipe,
    CarouselComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselCaptionComponent,
    CarouselControlComponent,
    CommonModule,
    NgOptimizedImage,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  employees: Employee[] = [];

  constructor(private dbSingleton: DbSingletonService) {
  }

  ngOnInit() {
    this.products = this.dbSingleton.products.slice(0, 3);
    this.employees = this.dbSingleton.employees;
  }

}
