import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { ProductsNavBarComponent } from './components/products/products-nav-bar/products-nav-bar.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {productsReducer} from './ngrx/products.reducer';
import {ProductsEffects} from './ngrx/products.effects';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({catalogState:productsReducer}), // On specifie le reducer dans les crocket
    EffectsModule.forRoot([ProductsEffects]),
    StoreDevtoolsModule.instrument()  // O demarrage l'app va notifier le plugin chrome (a ajouter) qui permet de voir l'etat du state
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
