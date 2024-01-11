import {Component, OnInit} from '@angular/core';
import {PageService} from "../../service/page.service";
import {ButtonService} from "../../service/button.service";
import {Page} from "../../model/Page";
import {Button} from "../../model/Button";

@Component({
  selector: 'behaviour-table',
  templateUrl: './behaviour-table.component.html',
  styleUrl: './behaviour-table.component.css'
})
export class BehaviourTableComponent implements OnInit{
  constructor(private pageService: PageService,
              private buttonService: ButtonService) {}

  ngOnInit(): void {
    this.readData();
  }



  pageNumbers! :number[];
  visitCounts! :number[];
  buttonNumbers! :number[];
  clickCounts! :number[];

  readData(){

    this.pageNumbers = []; // Инициализация массива pageNumbers
    this.visitCounts = []; // Инициализация массива visitCounts
    this.buttonNumbers = []; // Инициализация массива buttonNumbers
    this.clickCounts = []; // Инициализация массива clickCounts

    this.pageService.getAllPages().subscribe(data =>{
      let pages:Page[] = data;
      for (let page of pages){
        this.pageNumbers.push(page.id)
        this.visitCounts.push(page.numberOfGuests)
      }
    });
    this.buttonService.getAllButtons().subscribe(data =>{
      let buttons: Button[] = data
      for (let button of buttons){
        this.buttonNumbers.push(button.id)
        this.clickCounts.push(button.numberOfButtonClick)
      }
    })
  }
}
