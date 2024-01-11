import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/Product";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent implements OnInit{

  public products: Product[] = [];

  constructor(private productService: ProductService,
              ) {}

  ngOnInit(): void {
    this.readData();
  }

  readData(){
    this.productService.getAllProducts().subscribe(data =>{
      this.products = data;
    });
  }

}
