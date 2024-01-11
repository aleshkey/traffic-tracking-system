import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BehaviourComponent} from "./components/behaviour/behaviour.component";
import {ProductsComponent} from "./components/products/products.component";
import {TrafficComponent} from "./components/traffic/traffic.component";
import {TableComponent} from "./components/table/table.component";
import {BehaviourTableComponent} from "./components/behaviour-table/behaviour-table.component";
import {ProductTableComponent} from "./components/product-table/product-table.component";

const routes: Routes = [
  {path: 'traffic', component: TrafficComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'behaviour', component: BehaviourComponent},
  {path: 'table', component: ProductTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
