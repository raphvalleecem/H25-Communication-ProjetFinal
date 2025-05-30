import { Component, Input } from '@angular/core';
import { Avis } from '../../dbSingleton.service';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-avis-item',
  imports: [
    NgIf
  ],
  standalone: true,
  templateUrl: './avis-item.component.html',
  styleUrl: './avis-item.component.css'
})
export class AvisItemComponent {
    @Input() avis: Avis | undefined;
}
