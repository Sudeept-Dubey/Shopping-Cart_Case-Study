import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '@core/auth/auth-guard.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },

  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'contact-us',
    pathMatch: 'full',
    component: ContactUsComponent
  },

  {
    path: 'about-us',
    pathMatch: 'full',
    component: AboutUsComponent
  },

  {
    path: 'products',
    loadChildren: './products/products.module#ProductsModule'
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'cart',
    loadChildren: './cart/cart.module#CartModule',
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
