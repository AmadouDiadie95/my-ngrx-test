import {Injectable} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {GetALLProductsAtionError, GetALLProductsAtionSuccess, ProductsActionsTypes} from './products.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';

@Injectable() // Car l'effect est un Service
export class ProductsEffects {

  constructor(private productService: ProductService, private effectActions:Actions) {}

  // Pour chak action on cree une fucntion qui permet de la traiter

  // C une variable qui va representer l'effect, elle reçoie l'action cme fucntion lambda
  getAllProductsEffect:Observable<Action> = createEffect( ()=>
      this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
        mergeMap( (action)=>{
          return this.productService.getProducts().pipe(
            map((products)=> new GetALLProductsAtionSuccess(products)),
            catchError( (err) => of(new GetALLProductsAtionError(err)))
          )
        } )
      )
   ) ;

}
