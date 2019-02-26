import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { initializeApp, database } from 'firebase';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private ProductService:ProductService) { }

  
  selectedProduct:any;
  products:any;
  id:any;
  ngOnInit() {
    this.ProductService.getProducts().then(s=>{
      this.products=s;
    });
  }
  selected(id){
    this.ProductService.getDetail(id).then(s=>{
      this.selectedProduct=s;
      this.id=id;
    })
  }
  addCrud(){
    this.ProductService.getProducts().then((s) => {
      const products = s;
      const id=products.length;
      firebase.database().ref('products/' + id).set({
        name: this.selectedProduct.name,
        price: this.selectedProduct.price,
        image: this.selectedProduct.image,
        des :this.selectedProduct.des
      }, function(error) {
        if (error) {
          console.log('fail');
        } else {
         alert('Add Successfully');
        }
      });
    });
  }

  updateCrud(){
    var updates = {};
    updates['/products/' + this.id] = this.selectedProduct;
    firebase.database().ref().update(updates);
    this.ProductService.getProducts().then(s=>{
      this.products=s;
    });
  }
  deletedCrud(id){
    var updates = {};
    updates['/products/' + id] = null;
    firebase.database().ref().update(updates);
    this.ProductService.getProducts().then(s=>{
      this.products=s;
    });
  }
}
