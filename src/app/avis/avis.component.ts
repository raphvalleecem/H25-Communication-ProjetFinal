import { Component, OnInit } from '@angular/core';
import { Avis, DbSingletonService } from '../dbSingleton.service';
import { AvisItemComponent } from './avis-item/avis-item.component';
import { NgForOf } from '@angular/common';
import {NgIcon, provideIcons} from "@ng-icons/core"
import {bootstrapFacebook, bootstrapX, bootstrapInstagram, bootstrapYoutube} from "@ng-icons/bootstrap-icons"

@Component({
  selector: 'app-avis',
  imports: [ 
    AvisItemComponent,
    NgForOf,
    NgIcon
  ],
  providers: [provideIcons({bootstrapFacebook, bootstrapX, bootstrapInstagram, bootstrapYoutube})],
  templateUrl: './avis.component.html',
  styleUrl: './avis.component.css',
  standalone: true
})
export class AvisComponent implements OnInit {
  avis: Avis[] = [];
  
    constructor(private dbSingleton: DbSingletonService) {
    }
  
    ngOnInit() {
      this.avis = this.dbSingleton.avis;
    }
}
