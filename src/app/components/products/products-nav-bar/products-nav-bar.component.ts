import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {GetALLProductsAtion} from '../../../ngrx/products.actions';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.store.dispatch(new GetALLProductsAtion({}))
  }

  onGetSelectedProducts() {

  }
}
