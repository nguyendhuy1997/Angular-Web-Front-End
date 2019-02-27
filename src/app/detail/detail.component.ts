import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HomepageComponent } from '../homepage/homepage.component';
import {ProductService} from '../product.service'
@Component({
  providers: [HomepageComponent],
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private ProductService: ProductService,
    private route: ActivatedRoute,
    private location: Location,private home: HomepageComponent,) { }
    detail:any;
    id:any;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.ProductService.getDetail(this.id).then((s) => {
      console.log(s);
      this.detail=s;
    });
  }
  formatNumber(price: Number): String {
    var regex = /\B(?=(\d{3})+(?!\d))/g;
    return price.toString().replace(regex, ".");
  }
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
      alert('Add Successfully');
    });
    
}
}
