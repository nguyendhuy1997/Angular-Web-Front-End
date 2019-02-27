import { Component, OnInit } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';
import { ProductService } from '../product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
@Component({
  providers: [HomepageComponent],
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private home: HomepageComponent, private ProductService: ProductService) { }
  cart: any;
  sl: string;
  total: any;
  formdata: FormGroup;
  ngOnInit() {
    this.formdata = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required,])
      ),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email])),
      address: new FormControl('', Validators.compose([
        Validators.required,
        ]))
    });
    this.total = 0;
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.cart.forEach(element => {
      this.total = this.total + (element.price * element.sl);
    });


  }
  delete(id: any) {
    this.cart.splice(id, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.total = 0;
    this.cart.forEach(element => {
      this.total += element.price * element.sl;
    });
  }
  update(id) {
    const input = (document.getElementsByClassName('input-sl') as HTMLCollection);
    var sl: HTMLInputElement = input[id] as HTMLInputElement;
    this.ProductService.getDetail(id).then(s => {
      this.cart = JSON.parse(localStorage.getItem('cart')) || [];
      this.cart[id].sl = sl.value;
      this.total = 0;
      this.cart.forEach(element => {
        this.total += element.price * element.sl;
      });
      localStorage.setItem('cart', JSON.stringify(this.cart));
    });


  }
  addCart(id: any) {
    this.home.getSelectedProduct(id);
    this.ProductService.getDetail(id);
  }
  onSubmit(formdata) {
    this.total = 0;
    this.cart.forEach(element => {
      this.total += element.price * element.sl;
    });
    var keyBill = firebase.database().ref().child('bill').push().key;
    firebase.database().ref('bill/' + keyBill).set({
      name: formdata.username,
      address: formdata.address,
      email:formdata.email,
      total:this.total,
    }, function(error) {
      if (error) {
        console.log('fail');
      } else {
       alert('Complete Payment');
      }
    });
    
  }

}
