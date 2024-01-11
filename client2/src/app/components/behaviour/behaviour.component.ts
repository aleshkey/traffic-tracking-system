import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PageService} from "../../service/page.service";
import {ButtonService} from "../../service/button.service";
import {Page} from "../../model/Page";
import {Button} from "../../model/Button";

@Component({
  selector: 'app-behaviour',
  templateUrl: './behaviour.component.html',
  styleUrl: './behaviour.component.css'
})
export class BehaviourComponent implements OnInit{

  public pageForm: FormGroup = this.createPageForm();
  public buttonForm: FormGroup = this.createButtonForm();
  public pageGuests = '';
  public buttonClicks: string = '';

  constructor(private fb: FormBuilder,
              private pageService: PageService,
              private buttonService: ButtonService) {
  }

  createPageForm(): FormGroup {
    return this.fb.group({
      pageNumber: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {

  }


  submitPage(){
    this.pageGuests = '';
    this.pageService.getById(
      this.pageForm.value.pageNumber
    ).subscribe(
      (data) =>{
        let page:Page = data
        this.pageGuests = page.numberOfGuests.toString()+" посещений"
      }
    )
  }

  submitButtons(){
    this.buttonClicks = '';
    this.buttonService.getById(
      this.buttonForm.value.buttonNumber
    ).subscribe(
      (data) =>{
        let button:Button = data
        this.buttonClicks = button.numberOfButtonClick.toString()+" кликов"
      }
    )
  }

  private createButtonForm() {
    return this.fb.group({
      buttonNumber: ['', Validators.compose([Validators.required])],
    });
  }
}
