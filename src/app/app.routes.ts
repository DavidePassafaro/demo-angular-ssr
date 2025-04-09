import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { DetailsComponent } from './shop/details/details.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile-page/profile-page.component').then(
        (m) => m.ProfilePageComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: 'shop',
    loadComponent: () =>
      import('./shop/shop.component').then((m) => m.ShopComponent),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./shop/details/details.component').then(
        (m) => m.DetailsComponent
      ),
  },
  { path: '**', redirectTo: 'home' }, // Redirect to home for any unknown routes
];
