import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MaterialModule} from "./material.module";
import {TrafficService} from "./service/traffic.service";
import {RouterOutlet} from "@angular/router";
import {NavbarComponent} from "./components/navbar/navbar.component";
import { TableComponent } from './components/table/table.component';
import {ButtonService} from "./service/button.service";
import {PageService} from "./service/page.service";
import {ProductService} from "./service/product.service";
import {BehaviourComponent} from "./components/behaviour/behaviour.component";
import { BehaviourTableComponent } from './components/behaviour-table/behaviour-table.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import {ProductsComponent} from "./components/products/products.component";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    BehaviourComponent,
    BehaviourTableComponent,
    ProductTableComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    NavbarComponent,
    RouterOutlet,
    NavbarComponent
  ],
  providers: [
    TrafficService,
    ButtonService,
    PageService,
    ProductService,
    provideClientHydration()
  ],
  exports: [
    TableComponent,
    ProductTableComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
