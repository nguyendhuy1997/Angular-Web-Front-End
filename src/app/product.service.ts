import { Injectable, OnInit } from '@angular/core';
import { initializeApp, database } from 'firebase';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { products } from 'src/app/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProducts() {
    return database().ref('products').once('value').then((s)=>s.val());
  };
  getDetail(id:string){
    return database().ref(`products/${id}`).once('value').then((s)=>s.val());
  }
}
