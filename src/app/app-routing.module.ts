import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { OffersComponent } from './offers/offers.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
{ path: 'products', component: ProductsComponent },
{ path: 'offers', component: OffersComponent },
{ path: 'contact', component: ContactComponent },
{ path: '', component: OffersComponent },
{ path: '**', redirectTo: '/offers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
