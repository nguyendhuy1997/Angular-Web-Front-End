import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {DetailComponent} from './detail/detail.component';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import { Location } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import {RegisterComponent} from './register/register.component';
import {CrudComponent} from './crud/crud.component';

const routes: Routes = [
  {path: '', component: HomepageComponent,  },
  {path: 'detail/:id', component: DetailComponent },
  {path: 'login', component: LoginComponent },
  {path: 'cart', component: CartComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'crud', component: CrudComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
