import {Product} from '../model/product.model';
import {ProductsActions, ProductsActionsTypes} from './products.actions';
import {Action} from '@ngrx/store';

//Represente le status du state comme enumerateur
export enum ProductsStateEnum {
  LOADING = "Loading",
  LOADED = "Loaded",
  ERROR = "Error",
  INITIAL = "Initial"
}

// Represente le state mm a creer
export interface ProductsState {
  products: Product[],
  errorMessage: string,
  dataState:ProductsStateEnum
}

// On cree une constante comme etat initial du state a donne au reducer qui est pris des lors du demarage de l'app
const initState:ProductsState = {
  products:[],
  errorMessage:'',
  dataState:ProductsStateEnum.INITIAL
} ;

// Represente le Reducer mm et on l'initialise
export function productsReducer(state: ProductsState=initState, action: Action):ProductsState {
switch (action.type) {
  case ProductsActionsTypes.GET_ALL_PRODUCTS:
    return {...state, dataState:ProductsStateEnum.LOADING } // Peermet de cloner le state directement, copie rapide en typescript mm
  case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
    return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}  // Met la liste des products obtenu dans le payload en castant vers le type ProductsAction
  case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
    return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}

  default :
    return {...state}
}
}
