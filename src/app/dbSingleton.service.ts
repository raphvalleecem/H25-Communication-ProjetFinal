import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',  // Ensures that the service is a singleton throughout the application
})
export class DbSingletonService {
  public number: number = 0;
  public products: Product[] = [
    {
      name: 'Product 1',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png',
      price: 1
    },
    {
      name: 'Product 2',
      imageUrl: 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image9-2.jpg?width=432&name=image9-2.jpg',
      price: 2
    },
    {
      name: 'Product 3',
      imageUrl: 'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/5/e/6/5e6f4ecb84_100517_google-definition.jpg',
      price: 3
    },
  ];

}

export interface Product {
  name: string;
  imageUrl: string;
  price: number;
}
