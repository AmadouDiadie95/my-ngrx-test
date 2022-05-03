import {Action} from '@ngrx/store';
import {Product} from '../model/product.model';

export enum ProductsActionsTypes {  // Les types d'action comme enumerations
  GET_ALL_PRODUCTS = "[Products] Get All Products",
  GET_ALL_PRODUCTS_SUCCESS = "[Products] Get All Products Success",
  GET_ALL_PRODUCTS_ERROR = "[Products] Get All Products Error",
}

export class GetALLProductsAtion implements Action{ // Represente la classe action mm de ngrx/store
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS ;
  constructor(public payload: any) {}

}

export class GetALLProductsAtionSuccess implements Action{ // Represente la classe action mm de ngrx/store
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS ;
  constructor(public payload: Product[]) {}

}

export class GetALLProductsAtionError implements Action{ // Represente la classe action mm de ngrx/store
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR ;
  constructor(public payload: string) {}

}

// On cree un nouveau type pour nos besoins
export type ProductsActions =
  GetALLProductsAtion | GetALLProductsAtionSuccess | GetALLProductsAtionError
