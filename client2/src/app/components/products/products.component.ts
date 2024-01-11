import {Component, OnInit} from '@angular/core';
import {AppModule} from "../../app.module";
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  public mostPopular!: string;
  public conversionRate!:number;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getMostPopular();
    this.getConversionRate();
  }

  private getMostPopular() {
    this.productService.getMostPopularProduct().subscribe(data =>{
      this.mostPopular = data.id+'. '+data.name;
    })
  }

  private getConversionRate() {
    this.productService.getAvgConversion().subscribe((data: any) =>{
      this.conversionRate = data ? data['conversion'] : null;
    })
  }


}
