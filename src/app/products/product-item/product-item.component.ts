import {Component, Input} from '@angular/core';
import {Product} from "../../dbSingleton.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
}
