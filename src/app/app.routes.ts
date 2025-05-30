import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {CartComponent} from "./cart/cart.component";
import { AvisComponent } from './avis/avis.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'avis', component:AvisComponent}
];
