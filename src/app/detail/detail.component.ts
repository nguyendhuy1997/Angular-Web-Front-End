import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ProductService} from '../product.service'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private ProductService: ProductService,
    private route: ActivatedRoute,
    private location: Location) { }
    detail:any;
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.ProductService.getDetail(id).then((s) => {
      console.log(s);
      this.detail=s;
    });
  }

}
