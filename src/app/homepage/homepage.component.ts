import { Component, OnInit } from '@angular/core';
import { initializeApp, database } from 'firebase';
import { products } from 'src/app/products';
import { Observable, of, observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { ProductService } from 'src/app/product.service';
import { TAIL } from '@angular/core/src/render3/interfaces/view';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  products: any;
  
  constructor(private ProductService: ProductService) { }
  ngOnInit() {
    this.ProductService.getProducts().then((s) => {
      //console.log(s);
      this.products = s;
    });
  }
  formatNumber(price: Number): String {
    var regex = /\B(?=(\d{3})+(?!\d))/g;
    return price.toString().replace(regex, ".");
  }
  public selectedProduct: Array<any> = [];
  getSelectedProduct(id: any) {
    var product: any;
    this.ProductService.getDetail(id).then(s => {
      product = s;
      const temp = JSON.parse(localStorage.getItem('cart')) || [];
      if(!temp[id])
      {
        temp[id]=product;
        product.sl = 1;
      }
      else {
        temp[id].sl +=1;
      }
      localStorage.setItem('cart', JSON.stringify(temp));
      console.log(localStorage.getItem('cart'));
    });
  
  }
}
