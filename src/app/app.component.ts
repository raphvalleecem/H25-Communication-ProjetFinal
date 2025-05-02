import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {DbSingletonService} from "./dbSingleton.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PixelGear';

  constructor(private dbSingleton: DbSingletonService) {
  }

  // ngOnInit() {
  //   console.log(this.dbSingleton.number);
  //   this.dbSingleton.number = 10;
  //   console.log(this.dbSingleton.number);
  // }
}
