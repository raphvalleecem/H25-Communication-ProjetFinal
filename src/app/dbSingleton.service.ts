import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',  // Ensures that the service is a singleton throughout the application
})
export class DbSingletonService {
  public number: number = 0;
  public products: Product[] = [
    {
      name: 'Produit 1',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png',
      price: 1,
      onSale: false,
      onCart: true
    },
    {
      name: 'Produit 2',
      imageUrl: 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image9-2.jpg?width=432&name=image9-2.jpg',
      price: 2,
      onSale: false,
      onCart: false
    },
    {
      name: 'Produit 3',
      imageUrl: 'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/5/e/6/5e6f4ecb84_100517_google-definition.jpg',
      price: 3,
      onSale: false,
      onCart: false
    },
    {
      name: 'Téléphone intelligent XYZ',
      imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1000&auto=format&fit=crop',
      price: 499,
      onSale: true,
      onCart: false
    },
    {
      name: 'Portables',
      imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop',
      price: 899,
      onSale: false,
      onCart: false
    },
    {
      name: 'Écouteurs Sans-Fil',
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
      price: 129,
      onSale: false,
      onCart: false
    },
    {
      name: 'Montre intelligente',
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop',
      price: 199,
      onSale: false,
      onCart: true
    },
    {
      name: 'Haut-parleur Bluetooth',
      imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000&auto=format&fit=crop',
      price: 79,
      onSale: false,
      onCart: false
    },
    {
      name: 'Caméra Digital',
      imageUrl: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop',
      price: 349,
      onSale: true,
      onCart: false
    },
    {
      name: 'Console de jeu',
      imageUrl: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=1000&auto=format&fit=crop',
      price: 299,
      onSale: false,
      onCart: false
    },
  ];

  public employees: Employee[] = [
    {
      name: 'Jean Dupont',
      position: 'Développeur Logiciel',
      department: 'Ingénierie',
      email: 'jean.dupont@example.com',
      phone: '555-123-4567',
      hireDate: new Date('2022-01-15')
    },
    {
      name: 'Marie Lefebvre',
      position: 'Chef de Produit',
      department: 'Produit',
      email: 'marie.lefebvre@example.com',
      phone: '555-987-6543',
      hireDate: new Date('2021-06-10')
    },
    {
      name: 'Michel Martin',
      position: 'Designer UX',
      department: 'Design',
      email: 'michel.martin@example.com',
      phone: '555-456-7890',
      hireDate: new Date('2023-03-22')
    },
  ];

  public avis: Avis[] = [
    {
      user: 'Mahmoud Thibodeau',
      stars: 5,
      description: 'Service à la clientèle au top! Mon go-to pour tout ce qui est produit pour ordinateurs.',
    },
    {
      user: 'Robert Gatorade',
      stars: 5,
      description: 'Produits de haute qualité, à prix abordables!',
    },
    {
      user: 'Marie-Michelle De la Framboiserie',
      stars: 5,
      description: 'Mon équipe de bowling cherche un joueur pour notre tournoi ce week-end. Des intéressés?',
    }
  ];

}

export interface Product {
  name: string;
  imageUrl: string;
  price: number;
  onSale: boolean;
  onCart: boolean;
}

export interface Employee {
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  hireDate: Date;
}
export interface Avis {
  user: string
  stars: number
  description: string
}